/* Сайт АРКО. Все данные приходят из data/projects.js (window.ARKO),
   разметка секций — из index.html. Здесь только то, что нужно собрать на лету:
   карта, панель объектов по городу, кейсы, команда, просмотр фотографий. */

(function () {
  'use strict';

  var D = window.ARKO;
  if (!D) { return; }

  var byId = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (html != null) { n.innerHTML = html; }
    return n;
  };
  var clients = {};
  D.clients.forEach(function (c) { clients[c.id] = c; });
  var cities = {};
  D.cities.forEach(function (c) { cities[c.id] = c; });

  // объекты по городам и города по клиентам — считаем один раз
  var byCity = {}, cityList = {};
  D.projects.forEach(function (p) {
    (byCity[p.city] = byCity[p.city] || []).push(p);
    (cityList[p.client] = cityList[p.client] || []).push(cities[p.city].name);
  });

  var plural = function (n, one, few, many) {
    var a = n % 100, b = n % 10;
    if (a > 10 && a < 20) { return many; }
    if (b === 1) { return one; }
    if (b > 1 && b < 5) { return few; }
    return many;
  };

  /* ---------- шапка ---------- */

  var nav = byId('nav');
  var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- цифры о компании ---------- */

  var figures = [
    [D.stats.area, 'выполненных строительных работ'],
    [D.stats.revenue, 'выручка за 2025 г.'],
    [D.stats.objects, 'реализованных объекта'],
    [D.stats.teams, 'проектных команд']
  ];
  var figBox = byId('figures');
  figures.forEach(function (f) {
    var wrap = el('div', 'figure');
    wrap.appendChild(el('div', 'figure__num', f[0]));
    wrap.appendChild(el('div', 'figure__cap', f[1]));
    figBox.appendChild(wrap);
  });

  /* ---------- карта ---------- */

  var mapBox = byId('map');
  mapBox.insertAdjacentHTML('beforeend', D.map);
  byId('geo-count').textContent =
    D.stats.cities + ' городов · ' + D.stats.objects + ' реализованных объекта';

  var panel = byId('panel');
  var chipsBox = byId('chips');
  var active = null;

  var showCity = function (id) {
    var city = cities[id];
    var list = byCity[id] || [];
    active = id;

    mapBox.querySelectorAll('.city').forEach(function (g) {
      g.classList.toggle('is-active', g.getAttribute('data-city') === id);
    });
    chipsBox && chipsBox.querySelectorAll('.chip').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-city') === id);
    });

    panel.innerHTML = '';
    // в одной строке может стоять несколько одинаковых объектов одного заказчика
    // (например, три отделения ПСБ в Москве) — считаем их, а не строки
    var total = list.reduce(function (n, p) { return n + (p.count || 1); }, 0);
    panel.appendChild(el('p', 'panel__title', city.name));
    panel.appendChild(el('p', 'panel__sub', total
      ? total + ' ' + plural(total, 'объект', 'объекта', 'объектов')
      : 'Объекты этого города пока не описаны'));

    if (list.length) {
      var ul = el('ul', 'plist');
      list.forEach(function (p) {
        var c = clients[p.client];
        var li = el('li');
        if (c && c.gallery && c.gallery.length) {
          var img = el('img');
          img.src = c.gallery[0].thumb;
          img.alt = c.name;
          img.loading = 'lazy';
          li.appendChild(img);
        } else {
          // фотографий объекта ещё нет — вместо пустого места кадр с фотоаппаратом
          li.appendChild(el('div', 'plist__nophoto',
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3.5h6l1.2 2H20a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V7A1.5 1.5 0 0 1 4 5.5h3.8L9 3.5Z"/>'
            + '<circle cx="12" cy="12.2" r="3.6"/></svg>'));
        }
        var box = el('div');
        // у объекта может не быть описанного кейса — тогда в строке заказчик и объект
        box.appendChild(el('div', 'plist__name', c ? c.name : (p.customer || p.title)));
        var title = el('div', 'plist__title', p.title);
        if (p.count > 1) {
          title.appendChild(el('span', 'plist__count',
            p.count + ' ' + plural(p.count, 'объект', 'объекта', 'объектов')));
        }
        box.appendChild(title);
        box.appendChild(el('div', 'plist__work', (p.works || (c && c.works) || []).join(' · ')));
        if (c) {
          var a = el('a', 'plist__link', 'Смотреть кейс →');
          a.href = '#case-' + c.id;
          box.appendChild(a);
        } else {
          box.appendChild(el('div', 'plist__soon', D.labels.noPhoto));
        }
        li.appendChild(box);
        ul.appendChild(li);
      });
      panel.appendChild(ul);
    } else {
      panel.appendChild(el('p', 'panel__note',
        'Мы работали в этом городе, но карточка объекта ещё не заполнена.'));
    }

    var back = el('button', 'panel__back', '← Все города');
    back.addEventListener('click', reset);
    panel.appendChild(back);

    // город попадает в адрес — ссылку на «Казань» можно отправить заказчику
    if (history.replaceState) { history.replaceState(null, '', '#city=' + id); }
  };

  var reset = function () {
    active = null;
    mapBox.querySelectorAll('.city').forEach(function (g) { g.classList.remove('is-active'); });
    panel.innerHTML =
      '<div class="panel__empty">' +
      '<p class="panel__title">Выберите город</p>' +
      '<p class="panel__note">На карте отмечены города, где мы строили. ' +
      'Нажмите на любой — здесь появится список объектов.</p>' +
      '<div class="chips"></div></div>';
    chipsBox = panel.querySelector('.chips');
    buildChips();
  };

  var buildChips = function () {
    D.cities.forEach(function (c) {
      var n = (byCity[c.id] || []).length;
      var b = el('button', 'chip' + (n ? '' : ' chip--empty'), c.name);
      b.setAttribute('data-city', c.id);
      b.addEventListener('click', function () { showCity(c.id); });
      chipsBox.appendChild(b);
    });
  };
  buildChips();

  mapBox.querySelectorAll('.city').forEach(function (g) {
    var id = g.getAttribute('data-city');
    g.addEventListener('click', function () { showCity(id); });
    g.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showCity(id); }
    });
  });

  var fromHash = /^#city=(.+)$/.exec(location.hash);
  if (fromHash && cities[fromHash[1]]) { showCity(fromHash[1]); }

  /* ---------- кейсы ---------- */

  var casesBox = byId('cases');
  D.clients.forEach(function (c) {
    var section = el('section', 'case');
    section.id = 'case-' + c.id;
    var g = c.gallery || [];
    ['a', 'b', 'c', 'd'].forEach(function (slot, i) {
      if (!g[i]) { return; }
      var img = el('img', 'case__ph case__ph--' + slot);
      img.src = g[i].full;
      img.alt = c.name + ' — фотография объекта';
      img.loading = 'lazy';
      img.setAttribute('data-client', c.id);
      img.setAttribute('data-index', String(i));
      section.appendChild(img);
    });

    var side = el('div', 'case__side');
    var name = el('div', 'case__name', c.name);
    var logo = el('img', 'case__logo');           // логотип клиента, как на слайде кейса
    logo.src = 'assets/clients/' + c.id + '.png';
    logo.alt = c.name;
    logo.addEventListener('error', function () { logo.remove(); side.prepend(name); });
    logo.addEventListener('load', function () { name.remove(); });
    side.appendChild(logo);
    side.appendChild(name);
    var works = el('ul', 'case__works');
    c.works.forEach(function (w) { works.appendChild(el('li', null, w)); });
    side.appendChild(works);

    var list = (cityList[c.id] || []).slice();
    if (c.extra) { list.push(c.extra); }
    if (list.length) {
      var box = el('div', 'case__cities');
      list.forEach(function (name) { box.appendChild(el('span', null, name)); });
      side.appendChild(box);
    }
    if (c.lead) { side.appendChild(el('p', 'case__lead', c.lead)); }
    section.appendChild(side);
    section.appendChild(el('div', 'tag', c.tag));
    casesBox.appendChild(section);
  });

  /* ---------- клиенты и команда ---------- */

  var partners = byId('partners');
  D.partners.forEach(function (name) {
    var img = el('img');
    img.src = 'assets/clients/partner-' + name + '.png';
    img.alt = name;
    img.loading = 'lazy';
    partners.appendChild(img);
  });

  var people = function (host, list, photoClass) {
    if (!host || !list) { return; }        // блок может быть снят со страницы
    list.forEach(function (p) {
      var box = el('div', 'team__card');
      var figure = el('div', 'team__figure');   // красный блок за фигурой рисует CSS
      var img = el('img', photoClass);
      img.src = 'assets/team/' + p.photo;
      img.alt = p.name;
      img.loading = 'lazy';
      figure.appendChild(img);
      box.appendChild(figure);
      box.appendChild(el('div', 'team__name', p.name));
      box.appendChild(el('div', 'team__role', p.role));
      box.appendChild(el('div', 'team__projects', p.projects));
      host.appendChild(box);
    });
  };
  people(byId('team-grid'), D.team, 'team__photo');
  people(byId('pm-grid'), D.pms, 'pm__photo');

  /* ---------- просмотр фотографии ---------- */

  var lb = byId('lb'), lbImg = byId('lb-img'), lbCap = byId('lb-cap');
  var current = { photos: [], i: 0, name: '' };

  var render = function () {
    lbImg.src = current.photos[current.i].full;
    lbCap.textContent = current.name + ' · ' + (current.i + 1) + ' из ' + current.photos.length;
  };
  var open = function (clientId, index) {
    var c = clients[clientId];
    current = { photos: c.gallery, i: index, name: c.name };
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    render();
  };
  var close = function () {
    lb.hidden = true;
    document.body.style.overflow = '';
  };
  var step = function (d) {
    current.i = (current.i + d + current.photos.length) % current.photos.length;
    render();
  };

  casesBox.addEventListener('click', function (e) {
    var img = e.target.closest('.case__ph');
    if (img) { open(img.getAttribute('data-client'), +img.getAttribute('data-index')); }
  });
  byId('lb-close').addEventListener('click', close);
  byId('lb-prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  byId('lb-next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) { close(); } });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) { return; }
    if (e.key === 'Escape') { close(); }
    if (e.key === 'ArrowLeft') { step(-1); }
    if (e.key === 'ArrowRight') { step(1); }
  });
})();
