const options = {
  roundTheClock: 'Круглосуточный доступ',
  internetSpeed: 'Высокоскоростной интернет',
  legalAddress: 'Предоставление юридического адреса',
  freeMeeting: 'Бесплатная переговодная 2 часа в неделю',
  printerScaner: 'Принтер / сканер',
  dailyCleaning: 'Ежедневная уборка',
}

const {
  roundTheClock,
  internetSpeed,
  legalAddress,
  freeMeeting,
  printerScaner,
  dailyCleaning,
} = options

export const space = {
  name: 'Енисей',
  img: 'https://placehold.jp/600x600.png',
  area: '26,8 м2',
  workspaces: '5-6',
  screen: true,
  ownMeeting: false,
  options: [
    roundTheClock,
    internetSpeed,
    legalAddress,
    freeMeeting,
    printerScaner,
    dailyCleaning,
  ],
  price: {
    short: '46 000 ₽/мес',
    medium: '120 000 ₽/квартал*',
    long: '560 000 ₽/год*',
  },
  sales: '* Специальные условия',
}
