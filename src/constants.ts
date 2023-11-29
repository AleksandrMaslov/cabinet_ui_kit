const COLORS = {
  primary: {
    title: 'Primary',
    subtitle: 'Main brand color',
    colors: { Green: '#565B4F' },
    key: 'Primary',
  },
  positive: {
    title: 'Positive',
    subtitle: 'Decorative colors',
    colors: {
      Orange: '#C87A1B',
      LightGreen: '#727963',
      Blue: '#83AFCD',
      Milk: '#ECDBC5',
    },
    key: 'Positive',
  },
  greyscale: {
    title: 'Greyscale',
    subtitle: 'White to Black colors',
    colors: {
      White: '#FFFFFF',
      LightGrey: '#E6E6E6',
      Grey: '#656565',
      Black: '#1F1F1F',
    },
    key: 'Greyscale',
  },
}

const TYPOGRAPHY = {
  type: {
    primary: "'PT Root UI', sans-serif",
    headers: "'Jost', sans-serif",
  },
  weight: {
    primary: {
      medium: '500',
      regular: '400',
      light: '300',
    },
    headers: {
      extraBold: '800',
      bold: '700',
      medium: '500',
      light: '300',
    },
  },
  size: {
    primary: {
      s1: 10,
      s2: 11,
      s3: 12,
      m1: 14,
      m2: 16,
      m3: 18,
      l1: 22,
      l2: 27,
      l3: 33,
    },
    headers: {
      s1: 14,
      s2: 16,
      s3: 18,
      m1: 20,
      m2: 22,
      m3: 27,
      l1: 50,
      l2: 60,
      l3: 75,
    },
  },
}

const SAMPLETEXT = 'CABI.NET - Лучшие квадратные метры.'

export { COLORS, SAMPLETEXT, TYPOGRAPHY }
