export const spreadTypes = {
  simple: {
    amountCards: 1,
    className: 'simple',
    description: 'Esta é a tiragem mais simples e rápida. Ela oferece uma visão geral sobre a sua questão.',
    cardsFeatures: {
      0: 'Visão geral'
    }
  },
  period:{
    amountCards: 3,
    className: 'period',
    description: 'Esta tiragem oferece uma visão sobre o passado, presente e futuro da sua questão.',
    cardsFeatures: {
      0: 'Passado',
      1: 'Presente',
      2: 'Futuro'
    }
  },
  cross: {
    amountCards: 5,
    className: 'cross',
    description: '',
    cardsFeatures: {
      0: 'Positivo',
      1: 'Negativo',
      2: 'Caminho',
      3: 'Resultado',
      4: 'Síntese'
    }
  }
}
