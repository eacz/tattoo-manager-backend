interface SeedTattoo {
  client: string;

  day: Date;

  price: number;

  description?: string;

  images?: string[];

  clientContact?: string;

  hasPayedAdvancedDeposit?: boolean;

  advancedDepositAmount?: number;

  done?: boolean;
}

export const tattooData: SeedTattoo[] = [
  {
    client: 'Pato',
    day: new Date('2022-12-27T21:38:18.250+00:00'),
    price: 1500,
    description: 'Turno con pato para tatuarle un pato',
    done: false,
    hasPayedAdvancedDeposit: false,
    advancedDepositAmount: 0,
    clientContact: '@patoelgato',
    images: [
      'https://thumbs.dreamstime.com/b/gato-con-pato-de-goma-amarillo-y-pelirrojo-aislados-sobre-fondo-blanco-espacio-copia-215517240.jpg',
    ],
  },
  {
    client: 'Mimi',
    day: new Date('2022-12-28T21:38:18.250+00:00'),
    price: 2700,
    description: 'Turno con mimi para tatuarse una paloma',
    done: true,
    hasPayedAdvancedDeposit: true,
    advancedDepositAmount: 1200,
    clientContact: '@mimimimosa',
  },
  {
    client: 'Poa',
    day: new Date('2022-12-28T19:30:18.250+00:00'),
    price: 2200,
    done: false,
    hasPayedAdvancedDeposit: false,
    advancedDepositAmount: 0,
    clientContact: '@ppppoa',
  },
];
