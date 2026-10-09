/* Общий скрипт для всех страниц: меню «Услуги», фильтр на /proekty/, просмотр фото объекта.
   Без него всё тоже работает (меню — на <details>, фото открываются ссылкой), он только удобнее. */
(function () {
  'use strict';

  /* меню «Услуги»: закрыть по щелчку мимо и по Esc */
  var svc = document.querySelector('details.svc');
  if (svc) {
    document.addEventListener('click', function (e) {
      if (svc.open && !svc.contains(e.target)) { svc.open = false; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && svc.open) { svc.open = false; }
    });
  }

  /* /proekty/: фильтр по типу объекта */
  var pf = document.querySelector('.pf');
  var list = document.getElementById('proekty-list');
  if (pf && list) {
    pf.addEventListener('click', function (e) {
      var b = e.target.closest('.pf__b');
      if (!b) { return; }
      var t = b.getAttribute('data-type');
      Array.prototype.forEach.call(pf.children, function (x) { x.classList.toggle('is-on', x === b); });
      Array.prototype.forEach.call(list.children, function (card) {
        card.hidden = !!t && card.getAttribute('data-type') !== t;
      });
    });
  }

  /* страница объекта: просмотр фото по щелчку, листание стрелками */
  var gal = document.querySelector('.obj-gal');
  var lb = document.getElementById('lb');
  if (!gal || !lb) { return; }
  var links = gal.querySelectorAll('a');
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var name = gal.getAttribute('data-name') || '';
  var cur = 0;

  function show(i) {
    cur = (i + links.length) % links.length;
    img.src = links[cur].href;
    img.alt = name + ' — фото ' + (cur + 1);
    cap.textContent = name + ' · ' + (cur + 1) + ' / ' + links.length;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
  }
  gal.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) { return; }
    e.preventDefault();
    show(+a.getAttribute('data-i'));
  });
  document.getElementById('lb-close').addEventListener('click', close);
  document.getElementById('lb-prev').addEventListener('click', function () { show(cur - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) { close(); } });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) { return; }
    if (e.key === 'Escape') { close(); }
    if (e.key === 'ArrowLeft') { show(cur - 1); }
    if (e.key === 'ArrowRight') { show(cur + 1); }
  });
})();
