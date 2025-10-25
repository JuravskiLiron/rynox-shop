export type NavItem = { label: string; to: string };
export type MegaSection = { title: string; items: NavItem[] };

export const MEGA_MENU: Record<string, MegaSection[]> = {
  "Смартфоны & Таблеты": [
    { title: "Смартфоны", items: [
      { label: "iPhone", to: "/catalog?type=phone&brand=apple" },
      { label: "Samsung Galaxy", to: "/catalog?type=phone&brand=samsung" },
      { label: "Xiaomi / Redmi", to: "/catalog?type=phone&brand=xiaomi" },
      { label: "Планшеты", to: "/catalog?type=tablet" },
    ]},
    { title: "Аксессуары", items: [
      { label: "Чехлы", to: "/catalog?type=case" },
      { label: "Стёкла", to: "/catalog?type=glass" },
      { label: "Зарядки / Powerbank", to: "/catalog?type=charger" },
      { label: "Кабели / Переходники", to: "/catalog?type=cable" },
    ]},
  ],
  "Компьютеры": [
    { title: "Ноутбуки", items: [
      { label: "Игровые", to: "/catalog?type=laptop&tag=gaming" },
      { label: "Для работы", to: "/catalog?type=laptop&tag=work" },
      { label: "MacBook", to: "/catalog?type=laptop&brand=apple" },
    ]},
    { title: "Периферия", items: [
      { label: "Клавиатуры", to: "/catalog?type=keyboard" },
      { label: "Мыши", to: "/catalog?type=mouse" },
      { label: "Мониторы", to: "/catalog?type=monitor" },
      { label: "Наушники", to: "/catalog?type=headphones" },
    ]},
  ],
  "Гейминг": [
    { title: "Консоли", items: [
      { label: "PlayStation", to: "/catalog?type=console&brand=ps" },
      { label: "Xbox", to: "/catalog?type=console&brand=xbox" },
      { label: "Nintendo", to: "/catalog?type=console&brand=nintendo" },
    ]},
    { title: "Аксессуары", items: [
      { label: "Геймпады", to: "/catalog?type=gamepad" },
      { label: "VR", to: "/catalog?type=vr" },
      { label: "Кресла", to: "/catalog?type=chair" },
    ]},
  ],
  "Аудио": [
    { title: "Наушники", items: [
      { label: "TWS", to: "/catalog?type=headphones&tws=1" },
      { label: "Накладные", to: "/catalog?type=headphones&style=over" },
      { label: "Для спорта", to: "/catalog?type=headphones&sport=1" },
    ]},
    { title: "Колонки", items: [
      { label: "Портативные", to: "/catalog?type=speaker&portable=1" },
      { label: "Умные колонки", to: "/catalog?type=speaker&smart=1" },
    ]},
  ],
  "Умный дом": [
    { title: "Свет & Управление", items: [
      { label: "Лампочки", to: "/catalog?type=smartlight" },
      { label: "Розетки", to: "/catalog?type=smartsocket" },
    ]},
    { title: "Безопасность", items: [
      { label: "Камеры", to: "/catalog?type=cam" },
      { label: "Датчики", to: "/catalog?type=sensor" },
    ]},
  ],
  "Авто & Путешествия": [
    { title: "Для авто", items: [
      { label: "Держатели", to: "/catalog?type=car-mount" },
      { label: "Зарядки в авто", to: "/catalog?type=car-charger" },
    ]},
    { title: "Энергия", items: [
      { label: "Powerbank", to: "/catalog?type=powerbank" },
      { label: "Станции питания", to: "/catalog?type=powerstation" },
    ]},
  ],
  "Sale": [
    { title: "Скидки до -50%", items: [
      { label: "Все акции", to: "/catalog?promo=1" },
      { label: "Горящие предложения", to: "/deals" },
    ]},
  ],
};
