/* Посадочная ar-ko.ru/fit-out/: карта, кейсы и логотипы из ../data/projects.js (window.ARKO) —
   те же данные, что у главной, поэтому правятся в одном месте (docs/site/data/projects.json).
   Пути к картинкам в данных — от корня сайта, отсюда к ним добавляется «../». */

(function () {
  'use strict';

  var D = window.ARKO;
  if (!D) { return; }

  // какие кейсы показываем и в каком порядке; Райффайзенбанк — нельзя (запрет заказчика)
  var CASES = ['pmg', 'psb', 'carcade', 'gazpromneft', 'sparkle', 'kamala'];
  var HIDDEN_LOGOS = ['raiffeisen'];
  var UP = '../';

  var byId = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text != null) { n.textContent = text; }
    return n;
  };
  var plural = function (n, one, few, many) {
    var a = n % 100, b = n % 10;
    if (a > 10 && a < 20) { return many; }
    if (b === 1) { return one; }
    if (b > 1 && b < 5) { return few; }
    return many;
  };

  var clients = {}, cities = {}, byCity = {}, cityList = {};
  D.clients.forEach(function (c) { clients[c.id] = c; });
  D.cities.forEach(function (c) { cities[c.id] = c; });
  D.projects.forEach(function (p) {
    (byCity[p.city] = byCity[p.city] || []).push(p);
    if (p.client) {
      var l = (cityList[p.client] = cityList[p.client] || []);
      if (l.indexOf(cities[p.city].name) < 0) { l.push(cities[p.city].name); }
    }
  });

  /* ---------- карта ---------- */

  var mapBox = byId('map');
  var panel = byId('panel');
  mapBox.insertAdjacentHTML('beforeend', D.map);

  var chips = function (host) {
    D.cities.forEach(function (c) {
      var b = el('button', 'chip' + ((byCity[c.id] || []).length ? '' : ' chip--empty'), c.name);
      b.type = 'button';
      b.addEventListener('click', function () { showCity(c.id); });
      host.appendChild(b);
    });
  };

  var reset = function () {
    panel.innerHTML = '';
    panel.appendChild(el('p', 'panel__title', 'Выберите город'));
    panel.appendChild(el('p', 'panel__note', 'На карте — города, где мы уже сдавали объекты.'));
    var box = el('div', 'chips');
    panel.appendChild(box);
    chips(box);
    mapBox.querySelectorAll('.city').forEach(function (g) { g.classList.remove('is-active'); });
  };

  var showCity = function (id) {
    var list = byCity[id] || [];
    mapBox.querySelectorAll('.city').forEach(function (g) {
      g.classList.toggle('is-active', g.getAttribute('data-city') === id);
    });
    panel.innerHTML = '';
    var total = list.reduce(function (n, p) { return n + (p.count || 1); }, 0);
    panel.appendChild(el('p', 'panel__title', cities[id].name));
    panel.appendChild(el('p', 'panel__sub', total
      ? total + ' ' + plural(total, 'объект', 'объекта', 'объектов')
      : 'Объекты этого города пока не описаны'));
    var ul = el('ul', 'plist');
    list.forEach(function (p) {
      var c = clients[p.client];
      var li = el('li');
      var box = el('div');
      box.appendChild(el('div', 'plist__name', c ? c.name : (p.customer || p.title)));
      var title = el('div', 'plist__title', p.title);
      if (p.count > 1) {
        title.appendChild(el('span', 'plist__count', p.count + ' ' + plural(p.count, 'объект', 'объекта', 'объектов')));
      }
      box.appendChild(title);
      box.appendChild(el('div', 'plist__work', (p.works || (c && c.works) || []).join(' · ')));
      li.appendChild(box);
      ul.appendChild(li);
    });
    panel.appendChild(ul);
    var back = el('button', 'panel__back', '← Все города');
    back.type = 'button';
    back.addEventListener('click', reset);
    panel.appendChild(back);
  };

  chips(byId('chips'));
  mapBox.querySelectorAll('.city').forEach(function (g) {
    var id = g.getAttribute('data-city');
    g.addEventListener('click', function () { showCity(id); });
    g.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showCity(id); }
    });
  });

  /* ---------- кейсы ---------- */

  var casesBox = byId('cases');
  CASES.forEach(function (id) {
    var c = clients[id];
    if (!c) { return; }
    var card = el('article', 'lp-case');
    var pic = el('div', 'lp-case__img');
    if (c.gallery && c.gallery.length) {
      var img = el('img');
      img.src = UP + c.gallery[0].thumb;
      img.alt = c.name + ' — фотография объекта';
      img.loading = 'lazy';
      img.width = 620; img.height = 465;
      pic.appendChild(img);
    }
    pic.appendChild(el('span', 'lp-case__tag', c.tag));
    card.appendChild(pic);
    var body = el('div', 'lp-case__body');
    body.appendChild(el('h3', 'lp-case__name', c.name));
    if (c.lead) { body.appendChild(el('p', 'lp-case__lead', c.lead)); }
    body.appendChild(el('p', 'lp-case__works', c.works.join(' · ')));
    var where = (cityList[id] || []).slice();
    if (c.extra) { where.push(c.extra); }
    if (where.length) { body.appendChild(el('p', 'lp-case__cities', where.join(' · '))); }
    card.appendChild(body);
    casesBox.appendChild(card);
  });

  /* ---------- логотипы ---------- */

  var logos = byId('logos');
  D.partners.forEach(function (name) {
    if (HIDDEN_LOGOS.indexOf(name) >= 0) { return; }
    var img = el('img');
    img.src = UP + 'assets/clients/partner-' + name + '.png';
    img.alt = '';                 // логотипы декоративные: у блока есть подпись «Клиенты»
    img.loading = 'lazy';
    logos.appendChild(img);
  });
})();
