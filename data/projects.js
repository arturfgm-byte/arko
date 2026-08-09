/* Собрано scripts/build_site.py из projects.json. Править projects.json. */
window.ARKO = {
  "stats": {
    "area": "57 тыс. кв. м",
    "revenue": "310 млн руб.",
    "objects": "52",
    "teams": "5",
    "cities": "14",
    "shown": "Пока на карте — объекты из реестра, заполненного Артуром 09.08.2026. Остальные добавляются в этот файл."
  },
  "labels": {
    "noPhoto": "Фотограф выехал на объект — фото пока не готово"
  },
  "cities": [
    {
      "id": "spb",
      "name": "Санкт-Петербург",
      "lat": 59.94,
      "lon": 30.31,
      "side": "left",
      "shift": -0.5
    },
    {
      "id": "moskva",
      "name": "Москва",
      "lat": 55.75,
      "lon": 37.62,
      "side": "left",
      "shift": 0.5
    },
    {
      "id": "yaroslavl",
      "name": "Ярославль",
      "lat": 57.63,
      "lon": 39.87,
      "side": "right",
      "shift": -0.6
    },
    {
      "id": "nnovgorod",
      "name": "Нижний Новгород",
      "lat": 56.33,
      "lon": 44.0,
      "side": "right",
      "shift": 0.55
    },
    {
      "id": "perm",
      "name": "Пермь",
      "lat": 58.01,
      "lon": 56.25,
      "side": "right",
      "shift": -1.2
    },
    {
      "id": "kazan",
      "name": "Казань",
      "lat": 55.79,
      "lon": 49.12,
      "side": "left",
      "shift": 1.5
    },
    {
      "id": "ufa",
      "name": "Уфа",
      "lat": 54.74,
      "lon": 55.97,
      "side": "right",
      "shift": 1.4
    },
    {
      "id": "chelyabinsk",
      "name": "Челябинск",
      "lat": 55.16,
      "lon": 61.4,
      "side": "right",
      "shift": 0.2
    },
    {
      "id": "eysk",
      "name": "Ейск",
      "lat": 46.71,
      "lon": 38.27,
      "side": "left",
      "shift": -0.7
    },
    {
      "id": "tikhoretsk",
      "name": "Тихорецк",
      "lat": 45.85,
      "lon": 40.13,
      "side": "right",
      "shift": 0.1
    },
    {
      "id": "krasnodar",
      "name": "Краснодар",
      "lat": 45.04,
      "lon": 38.98,
      "side": "right",
      "shift": 1.3
    },
    {
      "id": "novy-urengoy",
      "name": "Новый Уренгой",
      "lat": 66.08,
      "lon": 76.63,
      "side": "right",
      "shift": -1.1
    },
    {
      "id": "kogalym",
      "name": "Когалым",
      "lat": 62.26,
      "lon": 74.48,
      "side": "right",
      "shift": 0.6
    },
    {
      "id": "irkutsk",
      "name": "Иркутск",
      "lat": 52.29,
      "lon": 104.28,
      "side": "right",
      "shift": 0
    }
  ],
  "clients": [
    {
      "id": "psb",
      "name": "ПСБ",
      "tag": "Офисы",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Девять отделений банка в разных городах страны — от Москвы до Ейска. Один заказчик, один стандарт отделки, разные площадки и сроки.",
      "photos": [
        "psb/psb-hd-reception.jpg",
        "psb/psb-hd-hall.jpg",
        "psb/psb-hd-club.jpg",
        "psb/psb-hd-neon.jpg",
        "psb/psb-hd-window.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/psb/psb-hd-reception.jpg",
          "thumb": "assets/photos/psb/psb-hd-reception-thumb.jpg"
        },
        {
          "full": "assets/photos/psb/psb-hd-hall.jpg",
          "thumb": "assets/photos/psb/psb-hd-hall-thumb.jpg"
        },
        {
          "full": "assets/photos/psb/psb-hd-club.jpg",
          "thumb": "assets/photos/psb/psb-hd-club-thumb.jpg"
        },
        {
          "full": "assets/photos/psb/psb-hd-neon.jpg",
          "thumb": "assets/photos/psb/psb-hd-neon-thumb.jpg"
        },
        {
          "full": "assets/photos/psb/psb-hd-window.jpg",
          "thumb": "assets/photos/psb/psb-hd-window-thumb.jpg"
        }
      ]
    },
    {
      "id": "carcade",
      "name": "Carcade",
      "tag": "Офисы",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Сеть офисов лизинговой компании (Газпромбанк Лизинг) в шести городах — от Санкт-Петербурга до Иркутска.",
      "photos": [
        "carcade/carcade-03.jpg",
        "carcade/carcade-06.jpg",
        "carcade/carcade-08.jpg",
        "carcade/carcade-05.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/carcade/carcade-03.jpg",
          "thumb": "assets/photos/carcade/carcade-03-thumb.jpg"
        },
        {
          "full": "assets/photos/carcade/carcade-06.jpg",
          "thumb": "assets/photos/carcade/carcade-06-thumb.jpg"
        },
        {
          "full": "assets/photos/carcade/carcade-08.jpg",
          "thumb": "assets/photos/carcade/carcade-08-thumb.jpg"
        },
        {
          "full": "assets/photos/carcade/carcade-05.jpg",
          "thumb": "assets/photos/carcade/carcade-05-thumb.jpg"
        }
      ]
    },
    {
      "id": "gazpromneft",
      "name": "Газпромнефть",
      "tag": "Офисы",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Офисные пространства в Ярославле и Челябинске.",
      "photos": [
        "gazpromneft/gazpromneft-01.jpg",
        "gazpromneft/gazpromneft-04.jpg",
        "gazpromneft/gazpromneft-06.jpeg",
        "gazpromneft/gazpromneft-05.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/gazpromneft/gazpromneft-01.jpg",
          "thumb": "assets/photos/gazpromneft/gazpromneft-01-thumb.jpg"
        },
        {
          "full": "assets/photos/gazpromneft/gazpromneft-04.jpg",
          "thumb": "assets/photos/gazpromneft/gazpromneft-04-thumb.jpg"
        },
        {
          "full": "assets/photos/gazpromneft/gazpromneft-06.jpg",
          "thumb": "assets/photos/gazpromneft/gazpromneft-06-thumb.jpg"
        },
        {
          "full": "assets/photos/gazpromneft/gazpromneft-05.jpg",
          "thumb": "assets/photos/gazpromneft/gazpromneft-05-thumb.jpg"
        }
      ]
    },
    {
      "id": "plus",
      "name": "Плюс",
      "tag": "Офисы",
      "works": [
        "Генеральный подрядчик",
        "Дизайн-проект и рабочее проектирование",
        "Отделочные и инженерные работы"
      ],
      "lead": "Проект целиком: от дизайн-концепции и рабочей документации до сдачи готового офиса.",
      "photos": [
        "plus/plus-04.jpg",
        "plus/plus-01.jpg",
        "plus/plus-02.jpg",
        "plus/plus-06.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/plus/plus-04.jpg",
          "thumb": "assets/photos/plus/plus-04-thumb.jpg"
        },
        {
          "full": "assets/photos/plus/plus-01.jpg",
          "thumb": "assets/photos/plus/plus-01-thumb.jpg"
        },
        {
          "full": "assets/photos/plus/plus-02.jpg",
          "thumb": "assets/photos/plus/plus-02-thumb.jpg"
        },
        {
          "full": "assets/photos/plus/plus-06.jpg",
          "thumb": "assets/photos/plus/plus-06-thumb.jpg"
        }
      ]
    },
    {
      "id": "ancor",
      "name": "Ancor",
      "tag": "Офисы",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Офис кадрового холдинга в Москве.",
      "photos": [
        "ancor/ancor-02.jpg",
        "ancor/ancor-05.jpg",
        "ancor/ancor-07.jpg",
        "ancor/ancor-06.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/ancor/ancor-02.jpg",
          "thumb": "assets/photos/ancor/ancor-02-thumb.jpg"
        },
        {
          "full": "assets/photos/ancor/ancor-05.jpg",
          "thumb": "assets/photos/ancor/ancor-05-thumb.jpg"
        },
        {
          "full": "assets/photos/ancor/ancor-07.jpg",
          "thumb": "assets/photos/ancor/ancor-07-thumb.jpg"
        },
        {
          "full": "assets/photos/ancor/ancor-06.jpg",
          "thumb": "assets/photos/ancor/ancor-06-thumb.jpg"
        }
      ]
    },
    {
      "id": "kamala",
      "name": "Театр Камала",
      "tag": "Общественные пространства",
      "works": [
        "Отделочные работы"
      ],
      "lead": "Отделочные работы в здании Татарского академического театра имени Галиасгара Камала в Казани.",
      "photos": [
        "teatr-kamala/teatr-kamala-02.jpg",
        "teatr-kamala/teatr-kamala-04.jpg",
        "teatr-kamala/teatr-kamala-05.jpg",
        "teatr-kamala/teatr-kamala-01.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/teatr-kamala/teatr-kamala-02.jpg",
          "thumb": "assets/photos/teatr-kamala/teatr-kamala-02-thumb.jpg"
        },
        {
          "full": "assets/photos/teatr-kamala/teatr-kamala-04.jpg",
          "thumb": "assets/photos/teatr-kamala/teatr-kamala-04-thumb.jpg"
        },
        {
          "full": "assets/photos/teatr-kamala/teatr-kamala-05.jpg",
          "thumb": "assets/photos/teatr-kamala/teatr-kamala-05-thumb.jpg"
        },
        {
          "full": "assets/photos/teatr-kamala/teatr-kamala-01.jpg",
          "thumb": "assets/photos/teatr-kamala/teatr-kamala-01-thumb.jpg"
        }
      ]
    },
    {
      "id": "sparkle",
      "name": "Sparkle",
      "tag": "Кафе и рестораны",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Заведение общественного питания в Москве — короткие сроки, работа в действующем здании.",
      "photos": [
        "sparkle/sparkle-02.jpg",
        "sparkle/sparkle-05.jpg",
        "sparkle/sparkle-06.jpg",
        "sparkle/sparkle-07.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/sparkle/sparkle-02.jpg",
          "thumb": "assets/photos/sparkle/sparkle-02-thumb.jpg"
        },
        {
          "full": "assets/photos/sparkle/sparkle-05.jpg",
          "thumb": "assets/photos/sparkle/sparkle-05-thumb.jpg"
        },
        {
          "full": "assets/photos/sparkle/sparkle-06.jpg",
          "thumb": "assets/photos/sparkle/sparkle-06-thumb.jpg"
        },
        {
          "full": "assets/photos/sparkle/sparkle-07.jpg",
          "thumb": "assets/photos/sparkle/sparkle-07-thumb.jpg"
        }
      ]
    },
    {
      "id": "pgk",
      "name": "Первая грузовая",
      "tag": "Кафе и рестораны",
      "works": [
        "Генеральный подрядчик",
        "Отделочные и инженерные работы"
      ],
      "lead": "Столовая и зоны отдыха в офисе транспортной компании.",
      "photos": [
        "pervaya-gruzovaya/pervaya-gruzovaya-02.jpg",
        "pervaya-gruzovaya/pervaya-gruzovaya-05.jpg",
        "pervaya-gruzovaya/pervaya-gruzovaya-06.jpg",
        "pervaya-gruzovaya/pervaya-gruzovaya-03.jpg"
      ],
      "gallery": [
        {
          "full": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-02.jpg",
          "thumb": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-02-thumb.jpg"
        },
        {
          "full": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-05.jpg",
          "thumb": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-05-thumb.jpg"
        },
        {
          "full": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-06.jpg",
          "thumb": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-06-thumb.jpg"
        },
        {
          "full": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-03.jpg",
          "thumb": "assets/photos/pervaya-gruzovaya/pervaya-gruzovaya-03-thumb.jpg"
        }
      ]
    }
  ],
  "projects": [
    {
      "client": "psb",
      "city": "moskva",
      "title": "Отделение банка",
      "count": 3
    },
    {
      "client": "psb",
      "city": "perm",
      "title": "Отделение банка"
    },
    {
      "client": "psb",
      "city": "chelyabinsk",
      "title": "Отделение банка"
    },
    {
      "client": "psb",
      "city": "eysk",
      "title": "Отделение банка"
    },
    {
      "client": "psb",
      "city": "tikhoretsk",
      "title": "Отделение банка"
    },
    {
      "client": "psb",
      "city": "kazan",
      "title": "Отделение банка"
    },
    {
      "client": "psb",
      "city": "ufa",
      "title": "Офис банка"
    },
    {
      "client": "carcade",
      "city": "spb",
      "title": "Офис компании"
    },
    {
      "client": "carcade",
      "city": "moskva",
      "title": "Офис компании"
    },
    {
      "client": "carcade",
      "city": "krasnodar",
      "title": "Офис компании"
    },
    {
      "client": "carcade",
      "city": "irkutsk",
      "title": "Офис компании"
    },
    {
      "client": "carcade",
      "city": "nnovgorod",
      "title": "Офис компании"
    },
    {
      "client": "carcade",
      "city": "kazan",
      "title": "Офис компании"
    },
    {
      "client": "gazpromneft",
      "city": "yaroslavl",
      "title": "Офис компании"
    },
    {
      "client": "gazpromneft",
      "city": "chelyabinsk",
      "title": "Офис компании"
    },
    {
      "client": "plus",
      "city": "moskva",
      "title": "Офис компании"
    },
    {
      "client": "ancor",
      "city": "moskva",
      "title": "Офис компании"
    },
    {
      "client": "sparkle",
      "city": "moskva",
      "title": "Кафе"
    },
    {
      "client": "pgk",
      "city": "moskva",
      "title": "Столовая и зоны отдыха"
    },
    {
      "client": "kamala",
      "city": "kazan",
      "title": "Театр имени Г. Камала"
    },
    {
      "customer": "Аскрин",
      "city": "novy-urengoy",
      "title": "Музей газа",
      "works": [
        "Отделочные работы"
      ]
    },
    {
      "customer": "Аскрин",
      "city": "kogalym",
      "title": "Музей нефти",
      "works": [
        "Отделочные работы"
      ]
    }
  ],
  "partners": [
    "psb-full",
    "gazpromneft-full",
    "carcade",
    "ancor",
    "danone",
    "adidas",
    "pgk-full",
    "ostrov",
    "restada",
    "fix",
    "dataru",
    "autospot"
  ],
  "pms": [
    {
      "name": "Солбон Бадмаев",
      "role": "Руководитель проектов",
      "projects": "Ritz-Carlton, BASF, Danone, «Смарт Технолоджис», Carcade Краснодар, Ancor, ПромСвязьБанк Челябинск",
      "photo": "rp-badmaev.png"
    },
    {
      "name": "Даниил Чаун",
      "role": "Руководитель проектов",
      "projects": "ПромСвязьБанк Пермь, Carcade Иркутск, Carcade Москва, Первая грузовая компания, Adidas",
      "photo": "rp-chaun.png"
    },
    {
      "name": "Ростислав Стог",
      "role": "Руководитель проектов",
      "projects": "Ritz-Carlton, «Кампари», жилой дом «Сады Майендорф» Барвиха, Дата.ru (офис и сервисный центр)",
      "photo": "rp-stog.png"
    }
  ],
  "team": [
    {
      "name": "Артур Фаттахов",
      "role": "Управляющий партнёр",
      "projects": "«Иль де Ботэ», ЧТПЗ, Ferrero, сеть H&M, акселератор «Сбербанка», VANKE",
      "photo": "portrait1.png"
    },
    {
      "name": "Евгений Шишкин",
      "role": "Управляющий партнёр",
      "projects": "S7 Airlines, Palfinger, T-Soft, РЭС Инжиниринг, Sminex, ФСК",
      "photo": "portrait2.png"
    },
    {
      "name": "Артур Булдаков",
      "role": "Управляющий партнёр",
      "projects": "Ritz-Carlton, BASF, Danone, «Смарт Технолоджис», сеть офисов Carcade, ЧТПЗ",
      "photo": "portrait3.png"
    }
  ],
  "map": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2000 1092\" class=\"map__svg\" role=\"group\" aria-label=\"Карта объектов АРКО\"><g class=\"map__land\"><path d=\"M384.4 734.6 L368.7 739.5 L354.1 730.6 L323.9 735.9 L318.2 763.7 L305.1 774.1 L298.4 808.9 L298.4 808.9 L283.4 808.1 L276.6 810.3 L272.0 803.2 L274.1 783.4 L271.1 779.0 L267.3 766.6 L271.0 755.5 L263.5 739.4 L253.2 733.7 L254.6 728.2 L247.6 701.8 L233.9 678.7 L227.9 664.1 L224.2 664.2 L227.1 633.5 L222.8 611.8 L226.0 591.2 L236.4 599.2 L261.3 598.7 L263.6 585.4 L286.2 599.3 L290.2 595.7 L278.2 586.2 L287.2 580.2 L297.7 582.9 L308.6 594.4 L316.6 591.5 L325.0 580.6 L339.0 577.9 L344.5 573.4 L336.9 550.3 L331.3 543.1 L334.9 528.8 L324.9 521.3 L321.0 500.4 L325.1 498.0 L330.8 487.8 L325.2 477.1 L330.8 472.0 L336.9 472.5 L343.3 457.2 L333.3 445.5 L332.0 441.1 L325.4 440.7 L323.4 435.4 L323.4 435.4 L334.8 424.5 L340.0 417.6 L343.3 418.9 L348.5 429.3 L355.9 431.3 L359.2 424.5 L358.0 414.1 L362.1 412.6 L363.0 405.5 L372.2 390.1 L379.2 389.5 L388.3 382.8 L386.8 368.5 L380.9 363.7 L385.2 359.2 L383.9 344.0 L394.5 333.8 L404.3 327.5 L406.3 319.5 L415.6 321.0 L433.7 307.6 L449.8 309.1 L452.7 305.6 L452.7 305.6 L470.7 311.5 L474.9 295.3 L474.9 295.3 L513.3 302.5 L530.3 304.7 L542.9 302.2 L549.2 280.3 L564.8 276.4 L575.9 259.8 L597.0 255.7 L615.5 232.9 L635.5 231.7 L643.0 212.0 L658.5 205.3 L663.7 210.3 L679.2 218.2 L679.2 218.2 L690.8 221.4 L685.7 240.8 L693.8 263.5 L691.7 306.4 L687.1 319.0 L675.0 329.4 L658.6 328.9 L644.0 320.1 L634.8 274.6 L628.6 270.3 L622.2 293.0 L613.3 299.6 L593.3 313.5 L594.7 328.6 L594.3 338.9 L604.5 333.3 L609.4 322.4 L620.5 322.4 L623.0 351.0 L632.9 354.2 L642.6 338.2 L675.0 341.3 L679.6 348.9 L679.2 361.2 L695.2 354.5 L700.7 339.2 L714.5 333.1 L721.4 318.4 L732.2 342.0 L726.0 354.9 L715.9 348.5 L706.2 357.6 L705.2 368.6 L719.1 375.5 L731.5 366.4 L753.1 371.4 L789.8 376.6 L794.1 381.7 L778.0 387.3 L784.9 396.3 L795.1 394.0 L808.5 403.6 L824.9 403.3 L824.7 420.9 L841.9 413.4 L842.4 396.9 L850.5 392.8 L867.2 412.4 L873.3 424.9 L887.8 464.3 L898.8 455.8 L896.8 440.5 L898.9 435.8 L891.0 428.9 L899.0 420.2 L904.2 401.5 L907.8 394.6 L930.7 382.0 L945.1 364.5 L952.0 362.5 L966.5 376.4 L962.5 389.5 L947.8 404.5 L949.1 413.6 L944.6 430.1 L929.5 459.6 L932.5 477.0 L922.7 490.2 L892.1 513.7 L900.6 521.5 L907.6 515.2 L919.6 513.6 L926.4 503.6 L938.1 496.0 L938.3 481.4 L948.1 468.2 L940.1 462.8 L943.4 449.7 L958.8 429.8 L957.1 407.6 L975.9 397.7 L980.9 381.0 L984.4 381.8 L983.0 395.8 L971.7 416.6 L977.9 423.7 L980.8 406.1 L995.9 401.5 L1010.9 405.2 L1020.2 422.5 L1019.6 401.1 L1026.5 376.0 L1039.3 374.6 L1055.0 379.7 L1070.2 379.7 L1067.5 366.0 L1078.1 351.6 L1085.4 352.3 L1099.4 342.2 L1115.9 340.9 L1118.6 334.4 L1134.5 333.4 L1139.1 339.2 L1152.9 326.4 L1163.7 326.9 L1165.1 316.0 L1170.2 305.2 L1182.6 294.3 L1192.6 301.7 L1185.5 308.5 L1198.6 311.2 L1201.5 323.3 L1206.0 316.7 L1222.7 314.5 L1237.9 324.1 L1244.6 332.2 L1245.8 345.2 L1240.4 353.8 L1226.0 370.2 L1222.1 378.2 L1230.9 380.3 L1241.9 384.7 L1247.0 379.0 L1253.6 393.7 L1255.3 386.9 L1265.2 380.6 L1287.7 378.8 L1292.6 389.3 L1322.0 383.4 L1315.9 365.7 L1331.1 364.4 L1341.3 360.0 L1357.0 367.1 L1366.6 379.8 L1367.0 390.9 L1383.8 404.1 L1399.4 407.3 L1394.2 381.3 L1410.2 385.0 L1418.3 372.7 L1434.9 371.2 L1436.0 362.4 L1448.3 358.2 L1431.0 342.6 L1432.9 328.4 L1494.2 298.9 L1508.8 305.0 L1536.4 303.7 L1554.4 276.9 L1567.5 267.3 L1579.5 268.2 L1592.8 279.9 L1604.6 275.8 L1607.3 263.8 L1615.3 251.3 L1628.0 240.6 L1634.2 225.6 L1660.2 223.5 L1658.6 210.3 L1641.8 209.0 L1634.2 200.6 L1652.3 180.2 L1658.3 163.9 L1678.3 146.1 L1692.4 138.7 L1781.8 171.9 L1781.9 172.0 L1787.1 187.9 L1780.5 199.6 L1795.7 195.8 L1816.3 197.1 L1824.1 194.8 L1833.7 197.1 L1838.6 202.0 L1826.1 219.2 L1829.9 254.8 L1828.1 265.0 L1835.3 288.1 L1840.3 309.9 L1847.7 318.9 L1825.1 325.6 L1825.1 361.6 L1814.8 361.4 L1817.0 376.6 L1805.3 388.0 L1816.0 400.1 L1826.1 425.6 L1834.2 430.9 L1846.9 422.2 L1874.3 443.5 L1867.9 454.1 L1880.6 470.5 L1892.3 471.9 L1887.6 498.7 L1906.3 519.2 L1897.5 539.7 L1913.6 558.5 L1917.0 589.4 L1900.8 582.8 L1870.3 564.5 L1825.3 535.2 L1804.8 508.4 L1801.2 490.9 L1793.2 483.1 L1801.7 464.6 L1791.9 428.7 L1784.7 397.6 L1781.3 369.6 L1758.7 343.2 L1752.8 355.4 L1764.9 372.2 L1768.5 411.1 L1739.7 400.5 L1727.4 428.2 L1737.7 476.5 L1755.2 479.0 L1741.1 503.2 L1729.4 518.5 L1718.0 505.6 L1702.0 516.0 L1698.9 534.8 L1668.2 556.1 L1641.0 586.4 L1634.6 647.9 L1621.3 722.8 L1641.4 714.0 L1655.2 723.1 L1669.6 720.1 L1670.5 705.2 L1684.1 697.8 L1716.0 707.4 L1728.4 723.7 L1733.0 750.0 L1748.6 774.2 L1765.0 810.0 L1764.4 853.0 L1769.0 870.1 L1764.9 906.7 L1759.6 943.3 L1757.1 961.7 L1743.4 986.3 L1733.5 992.1 L1717.8 986.9 L1704.5 1014.3 L1705.7 1023.0 L1705.7 1023.0 L1705.7 1023.0 L1705.7 1023.0 L1701.5 1020.2 L1701.5 1020.2 L1695.7 1009.0 L1703.7 1004.2 L1692.6 977.0 L1678.9 960.4 L1688.1 945.8 L1708.7 939.7 L1707.1 913.3 L1698.9 887.2 L1700.0 876.3 L1696.4 853.1 L1676.8 872.5 L1669.0 887.7 L1647.0 899.2 L1630.9 881.8 L1606.5 874.6 L1578.5 879.0 L1563.6 859.7 L1552.9 848.3 L1543.7 841.0 L1525.9 822.2 L1510.8 818.8 L1488.2 819.9 L1470.7 827.0 L1455.3 836.8 L1447.6 851.8 L1456.9 854.8 L1461.2 867.4 L1455.7 877.2 L1450.2 905.7 L1453.4 915.8 L1436.6 936.6 L1416.1 932.6 L1398.5 939.1 L1388.8 933.1 L1379.1 932.6 L1360.3 953.9 L1340.7 961.7 L1327.4 970.0 L1307.1 969.2 L1292.7 971.4 L1281.7 960.3 L1265.3 950.5 L1249.6 948.8 L1230.4 953.5 L1216.2 958.9 L1193.8 949.7 L1190.3 931.8 L1172.5 926.0 L1159.0 923.3 L1142.4 913.2 L1126.3 937.7 L1132.0 952.1 L1116.4 968.4 L1094.2 961.1 L1078.8 959.2 L1069.5 947.1 L1053.6 945.2 L1041.2 936.3 L1016.7 944.6 L984.1 960.5 L967.0 961.7 L960.6 962.5 L955.3 946.4 L934.9 945.3 L930.7 933.9 L921.3 926.8 L917.5 911.6 L910.4 905.3 L887.7 905.6 L871.6 886.4 L860.2 896.1 L848.2 827.8 L837.5 804.3 L844.9 799.0 L803.9 807.3 L790.7 803.3 L796.9 791.8 L783.7 777.1 L768.1 776.3 L774.7 752.0 L755.0 736.6 L739.6 739.8 L705.1 730.9 L696.3 732.6 L647.4 712.0 L637.5 715.2 L637.0 734.6 L622.0 732.0 L620.6 739.0 L602.3 740.6 L613.1 767.9 L603.6 775.3 L586.5 762.4 L578.8 765.7 L570.2 744.2 L550.8 730.2 L531.8 728.2 L523.9 709.3 L509.6 675.1 L491.9 659.9 L451.3 657.3 L437.5 668.5 L436.3 647.3 L408.5 656.8 L408.2 663.6 L388.5 669.6 L386.1 690.9 L395.1 699.1 L391.1 718.1 L381.0 725.8 L384.4 734.6 Z\"/><path d=\"M1133.9 208.4 L1143.0 203.2 L1150.4 216.7 L1160.1 241.9 L1158.9 265.0 L1148.1 268.0 L1134.8 259.9 L1127.8 249.4 L1126.3 230.7 L1120.9 224.8 L1133.9 208.4 Z\"/><path d=\"M1378.1 267.7 L1391.6 259.6 L1417.1 256.5 L1424.8 274.0 L1405.4 287.8 L1399.8 298.7 L1380.3 292.2 L1374.0 276.0 L1378.1 267.7 Z\"/><path d=\"M951.0 128.2 L960.1 131.1 L964.8 135.4 L960.4 141.0 L966.6 138.2 L972.4 137.8 L973.0 146.2 L969.1 148.1 L962.6 146.6 L958.4 145.3 L955.0 147.9 L948.3 147.3 L949.4 139.5 L956.9 135.7 L951.0 128.2 Z\"/><path d=\"M312.7 295.5 L302.8 271.9 L299.3 254.9 L310.3 254.2 L324.2 269.1 L325.7 283.9 L324.5 291.0 L317.9 292.1 L312.7 295.5 Z\"/><path d=\"M865.6 285.0 L891.7 278.5 L897.3 268.7 L916.4 266.9 L942.0 265.3 L961.1 271.9 L974.3 268.9 L985.6 271.3 L984.6 281.9 L977.5 287.0 L952.8 287.3 L930.4 287.3 L900.5 295.1 L877.9 308.2 L854.5 319.7 L843.1 336.4 L842.7 361.3 L837.7 360.2 L819.3 341.3 L824.7 331.7 L818.4 317.6 L826.4 307.1 L835.6 308.3 L844.2 298.1 L868.5 291.4 L865.6 285.0 Z\"/><path d=\"M1725.2 682.2 L1743.2 697.5 L1757.4 716.5 L1777.2 731.9 L1816.1 755.6 L1792.7 763.9 L1806.1 797.7 L1834.0 807.7 L1844.2 821.5 L1825.1 817.6 L1827.6 839.4 L1812.9 824.8 L1800.2 804.6 L1783.1 784.6 L1775.2 767.8 L1756.4 741.5 L1735.3 727.7 L1717.0 700.5 L1720.9 683.8 L1709.8 678.3 L1712.7 671.9 L1725.2 682.2 Z\"/><path d=\"M1746.6 108.6 L1760.7 113.5 L1768.2 108.9 L1750.8 106.4 L1760.6 82.7 L1786.5 69.2 L1794.7 80.9 L1793.4 97.2 L1816.0 103.1 L1819.8 108.3 L1816.6 117.5 L1806.5 122.8 L1796.1 133.9 L1785.5 133.0 L1778.8 141.4 L1778.1 153.1 L1768.5 155.4 L1760.8 150.5 L1762.2 163.4 L1774.3 163.0 L1781.8 171.9 L1692.4 138.7 L1716.8 124.4 L1746.6 108.6 Z\"/><path d=\"M210.2 535.1 L217.7 535.6 L219.8 548.6 L222.0 553.7 L219.1 558.2 L219.9 560.8 L218.2 562.1 L218.0 572.3 L229.1 586.0 L219.9 588.2 L205.8 574.9 L180.9 562.7 L179.9 551.8 L191.7 548.9 L187.9 529.0 L193.5 529.2 L209.1 538.8 L210.2 535.1 Z\"/></g><g class=\"city\" data-city=\"spb\" tabindex=\"0\" role=\"button\" aria-label=\"Санкт-Петербург, объектов: 1\"><circle class=\"city__hit\" cx=\"475.7\" cy=\"324.9\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"101.8\" y=\"297.0\" width=\"363.9\" height=\"55.8\" rx=\"1\"/><text x=\"283.8\" y=\"336.1\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">САНКТ-ПЕТЕРБУРГ</text></g><circle class=\"city__ring\" cx=\"475.7\" cy=\"324.9\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"475.7\" cy=\"324.9\" r=\"3.4\"/></g><g class=\"city\" data-city=\"moskva\" tabindex=\"0\" role=\"button\" aria-label=\"Москва, объектов: 6\"><circle class=\"city__hit\" cx=\"441.4\" cy=\"456.6\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"262.9\" y=\"428.7\" width=\"168.6\" height=\"55.8\" rx=\"1\"/><text x=\"347.2\" y=\"467.7\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">МОСКВА</text></g><circle class=\"city__ring\" cx=\"441.4\" cy=\"456.6\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"441.4\" cy=\"456.6\" r=\"3.4\"/></g><g class=\"city\" data-city=\"yaroslavl\" tabindex=\"0\" role=\"button\" aria-label=\"Ярославль, объектов: 1\"><circle class=\"city__hit\" cx=\"494.9\" cy=\"453.4\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"504.9\" y=\"425.5\" width=\"233.7\" height=\"55.8\" rx=\"1\"/><text x=\"621.7\" y=\"464.6\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ЯРОСЛАВЛЬ</text></g><circle class=\"city__ring\" cx=\"494.9\" cy=\"453.4\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"494.9\" cy=\"453.4\" r=\"3.4\"/></g><g class=\"city\" data-city=\"nnovgorod\" tabindex=\"0\" role=\"button\" aria-label=\"Нижний Новгород, объектов: 1\"><circle class=\"city__hit\" cx=\"505.1\" cy=\"514.5\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"515.0\" y=\"486.6\" width=\"363.9\" height=\"55.8\" rx=\"1\"/><text x=\"697.0\" y=\"525.6\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">НИЖНИЙ НОВГОРОД</text></g><circle class=\"city__ring\" cx=\"505.1\" cy=\"514.5\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"505.1\" cy=\"514.5\" r=\"3.4\"/></g><g class=\"city\" data-city=\"perm\" tabindex=\"0\" role=\"button\" aria-label=\"Пермь, объектов: 1\"><circle class=\"city__hit\" cx=\"647.2\" cy=\"594.1\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"657.2\" y=\"566.2\" width=\"146.9\" height=\"55.8\" rx=\"1\"/><text x=\"730.6\" y=\"605.3\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ПЕРМЬ</text></g><circle class=\"city__ring\" cx=\"647.2\" cy=\"594.1\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"647.2\" cy=\"594.1\" r=\"3.4\"/></g><g class=\"city\" data-city=\"kazan\" tabindex=\"0\" role=\"button\" aria-label=\"Казань, объектов: 3\"><circle class=\"city__hit\" cx=\"542.7\" cy=\"572.8\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"364.1\" y=\"544.9\" width=\"168.6\" height=\"55.8\" rx=\"1\"/><text x=\"448.4\" y=\"584.0\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">КАЗАНЬ</text></g><circle class=\"city__ring\" cx=\"542.7\" cy=\"572.8\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"542.7\" cy=\"572.8\" r=\"3.4\"/></g><g class=\"city\" data-city=\"ufa\" tabindex=\"0\" role=\"button\" aria-label=\"Уфа, объектов: 1\"><circle class=\"city__hit\" cx=\"596.1\" cy=\"653.1\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"606.0\" y=\"625.2\" width=\"103.5\" height=\"55.8\" rx=\"1\"/><text x=\"657.8\" y=\"664.3\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">УФА</text></g><circle class=\"city__ring\" cx=\"596.1\" cy=\"653.1\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"596.1\" cy=\"653.1\" r=\"3.4\"/></g><g class=\"city\" data-city=\"chelyabinsk\" tabindex=\"0\" role=\"button\" aria-label=\"Челябинск, объектов: 2\"><circle class=\"city__hit\" cx=\"662.3\" cy=\"688.7\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"672.2\" y=\"683.2\" width=\"233.7\" height=\"55.8\" rx=\"1\"/><text x=\"789.1\" y=\"722.2\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ЧЕЛЯБИНСК</text></g><circle class=\"city__ring\" cx=\"662.3\" cy=\"688.7\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"662.3\" cy=\"688.7\" r=\"3.4\"/></g><g class=\"city\" data-city=\"eysk\" tabindex=\"0\" role=\"button\" aria-label=\"Ейск, объектов: 1\"><circle class=\"city__hit\" cx=\"270.9\" cy=\"592.4\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"135.7\" y=\"564.5\" width=\"125.2\" height=\"55.8\" rx=\"1\"/><text x=\"198.4\" y=\"603.6\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ЕЙСК</text></g><circle class=\"city__ring\" cx=\"270.9\" cy=\"592.4\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"270.9\" cy=\"592.4\" r=\"3.4\"/></g><g class=\"city\" data-city=\"tikhoretsk\" tabindex=\"0\" role=\"button\" aria-label=\"Тихорецк, объектов: 1\"><circle class=\"city__hit\" cx=\"273.1\" cy=\"630.2\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"283.0\" y=\"602.3\" width=\"212.0\" height=\"55.8\" rx=\"1\"/><text x=\"389.0\" y=\"641.3\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ТИХОРЕЦК</text></g><circle class=\"city__ring\" cx=\"273.1\" cy=\"630.2\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"273.1\" cy=\"630.2\" r=\"3.4\"/></g><g class=\"city\" data-city=\"krasnodar\" tabindex=\"0\" role=\"button\" aria-label=\"Краснодар, объектов: 1\"><circle class=\"city__hit\" cx=\"245.3\" cy=\"626.5\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"255.2\" y=\"671.2\" width=\"233.7\" height=\"55.8\" rx=\"1\"/><text x=\"372.1\" y=\"710.2\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">КРАСНОДАР</text></g><circle class=\"city__ring\" cx=\"245.3\" cy=\"626.5\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"245.3\" cy=\"626.5\" r=\"3.4\"/></g><g class=\"city\" data-city=\"novy-urengoy\" tabindex=\"0\" role=\"button\" aria-label=\"Новый Уренгой, объектов: 1\"><circle class=\"city__hit\" cx=\"937.5\" cy=\"538.9\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"947.4\" y=\"511.0\" width=\"320.5\" height=\"55.8\" rx=\"1\"/><text x=\"1107.7\" y=\"550.1\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">НОВЫЙ УРЕНГОЙ</text></g><circle class=\"city__ring\" cx=\"937.5\" cy=\"538.9\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"937.5\" cy=\"538.9\" r=\"3.4\"/></g><g class=\"city\" data-city=\"kogalym\" tabindex=\"0\" role=\"button\" aria-label=\"Когалым, объектов: 1\"><circle class=\"city__hit\" cx=\"883.6\" cy=\"615.6\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"893.5\" y=\"587.7\" width=\"190.3\" height=\"55.8\" rx=\"1\"/><text x=\"988.7\" y=\"626.8\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">КОГАЛЫМ</text></g><circle class=\"city__ring\" cx=\"883.6\" cy=\"615.6\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"883.6\" cy=\"615.6\" r=\"3.4\"/></g><g class=\"city\" data-city=\"irkutsk\" tabindex=\"0\" role=\"button\" aria-label=\"Иркутск, объектов: 1\"><circle class=\"city__hit\" cx=\"1222.0\" cy=\"905.5\" r=\"46.5\"/><g class=\"city__plate\"><rect x=\"1232.0\" y=\"877.6\" width=\"190.3\" height=\"55.8\" rx=\"1\"/><text x=\"1327.1\" y=\"916.6\" text-anchor=\"middle\" font-size=\"31.0\" letter-spacing=\"1.55\">ИРКУТСК</text></g><circle class=\"city__ring\" cx=\"1222.0\" cy=\"905.5\" r=\"7.6\"/><circle class=\"city__dot\" cx=\"1222.0\" cy=\"905.5\" r=\"3.4\"/></g></svg>"
};
