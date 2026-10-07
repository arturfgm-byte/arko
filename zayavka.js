/* Цели Метрики и форма заявки — общий скрипт для всех страниц сайта АРКО
   (тест Яндекс Директа, ТЗ docs/leadgen/yandex-direct/tz.md, часть A).

   Цели счётчика 111554112 (в интерфейсе Метрики — тип «JavaScript-событие»):
     klik_telefon        — нажали на номер телефона (ссылка tel:)
     klik_pochta         — нажали на адрес почты (ссылка mailto:)
     zayavka_otpravlena  — форма заявки принята сервером
     obrashchenie        — любое из трёх: на неё Директ учится в стратегии «максимум конверсий»

   Метки рекламы (utm_*, yclid) запоминаются при входе на сайт и уходят вместе с заявкой,
   чтобы было видно, с какой кампании и по какой фразе она пришла. */

(function () {
  'use strict';

  var COUNTER = 111554112;
  var ENDPOINT = 'https://voronka.ar-ko.ru/api/zayavka';
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid'];

  var goal = function (name) {
    try { if (window.ym) { window.ym(COUNTER, 'reachGoal', name); } } catch (e) { /* без Метрики сайт работает */ }
  };

  /* ---------- клики по телефону и почте ---------- */

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) { return; }
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) { goal('klik_telefon'); goal('obrashchenie'); }
    else if (href.indexOf('mailto:') === 0) { goal('klik_pochta'); goal('obrashchenie'); }
  });

  /* ---------- метки рекламы ---------- */

  // хранилище браузера может быть закрыто (приватный режим) — тогда берём метки только из адреса
  var store = {
    get: function () { try { return JSON.parse(sessionStorage.getItem('arko_utm') || 'null'); } catch (e) { return null; } },
    set: function (v) { try { sessionStorage.setItem('arko_utm', JSON.stringify(v)); } catch (e) { /* ничего */ } }
  };
  var params = new URLSearchParams(location.search);
  var fromUrl = {};
  KEYS.forEach(function (k) { if (params.get(k)) { fromUrl[k] = params.get(k).slice(0, 300); } });
  var marks = Object.keys(fromUrl).length
    ? fromUrl
    : (store.get() || {});
  if (Object.keys(fromUrl).length) {
    marks.page = location.href.slice(0, 500);
    marks.referrer = (document.referrer || '').slice(0, 500);
    store.set(marks);
  }

  /* ---------- форма заявки ---------- */

  var form = document.getElementById('zayavka-form');
  if (!form) { return; }
  var shown = Date.now();
  var status = form.querySelector('.zf__status');
  var button = form.querySelector('button[type="submit"]');
  var fileInput = form.querySelector('input[type="file"]');
  var fileLabel = form.querySelector('.zf__file-name');
  var MAX = 20 * 1024 * 1024;
  // ClientID Метрики — чтобы потом найти визит заявки в вебвизоре; спрашиваем заранее, ответ асинхронный
  var clientId = '';
  try { if (window.ym) { window.ym(COUNTER, 'getClientID', function (id) { clientId = String(id || ''); }); } } catch (e) { /* ничего */ }

  var say = function (text, kind) {
    status.textContent = text;
    status.className = 'zf__status' + (kind ? ' zf__status--' + kind : '');
  };

  if (fileInput) {
    fileInput.addEventListener('change', function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) { fileLabel.textContent = 'Файл не выбран'; return; }
      if (f.size > MAX) {
        fileInput.value = '';
        fileLabel.textContent = 'Файл не выбран';
        say('Файл больше 20 МБ — пришлите его на почту или в мессенджер после звонка.', 'err');
        return;
      }
      fileLabel.textContent = f.name + ' · ' + (f.size / 1048576).toFixed(1) + ' МБ';
      say('');
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var phone = (form.elements.phone.value || '').replace(/\D/g, '');
    if (!form.elements.name.value.trim()) { say('Как к вам обращаться?', 'err'); form.elements.name.focus(); return; }
    if (phone.length < 10) { say('Проверьте номер телефона.', 'err'); form.elements.phone.focus(); return; }
    if (!form.elements.consent.checked) { say('Нужно согласие на обработку персональных данных.', 'err'); return; }

    var data = new FormData(form);
    data.set('consent', '1');
    data.set('t', String(Date.now() - shown));
    KEYS.forEach(function (k) { if (marks[k]) { data.set(k, marks[k]); } });
    data.set('page', marks.page || location.href.slice(0, 500));
    data.set('referrer', marks.referrer || (document.referrer || '').slice(0, 500));
    if (clientId) { data.set('client_id', clientId); }

    button.disabled = true;
    say('Отправляем…');
    fetch(ENDPOINT, { method: 'POST', body: data })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (res) {
        if (!res.ok) { throw new Error(res.error || 'ошибка'); }
        goal('zayavka_otpravlena');
        goal('obrashchenie');
        form.classList.add('is-sent');
        form.reset();
        if (fileLabel) { fileLabel.textContent = 'Файл не выбран'; }
        say('Заявка принята. Перезвоним в течение рабочего дня.', 'ok');
      })
      .catch(function (err) {
        var msg = err && err.message && err.message !== 'Failed to fetch' && err.message !== 'ошибка'
          ? err.message + '. '
          : 'Не получилось отправить. ';
        say(msg + 'Позвоните нам — номер ниже, или попробуйте ещё раз.', 'err');
      })
      .then(function () { button.disabled = false; });
  });
})();
