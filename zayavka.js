/* Цели Метрики — общий скрипт для всех страниц сайта АРКО
   (тест Яндекс Директа, ТЗ docs/leadgen/yandex-direct/tz.md, часть A).

   Цели счётчика 111554112 (в интерфейсе Метрики — тип «JavaScript-событие»):
     klik_telefon        — нажали на номер телефона (ссылка tel:)
     klik_pochta         — нажали на адрес почты (ссылка mailto:)
     obrashchenie        — любое из двух (до 29.10.2026 ещё zayavka_otpravlena — форма заявки, убрана): на неё Директ учится в стратегии «максимум конверсий»
 */

(function () {
  'use strict';

  var COUNTER = 111554112;

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
})();
