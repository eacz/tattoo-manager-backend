import * as dayjs from 'dayjs';

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

  hours?: number;
}

export const tattooData: SeedTattoo[] = [
  {
    client: 'Pato',
    day: dayjs().toDate(),
    price: 1500,
    description: 'Turno con pato para tatuarle un pato',
    done: false,
    hasPayedAdvancedDeposit: false,
    advancedDepositAmount: 0,
    clientContact: '@patoelgato',
    images: [
      'https://thumbs.dreamstime.com/b/gato-con-pato-de-goma-amarillo-y-pelirrojo-aislados-sobre-fondo-blanco-espacio-copia-215517240.jpg',
    ],
    hours: 1,
  },
  {
    client: 'Mimi',
    day: dayjs().add(1, 'day').set('hour', 12).toDate(),
    price: 2700,
    description: 'Turno con mimi para tatuarse una paloma',
    done: true,
    hasPayedAdvancedDeposit: true,
    advancedDepositAmount: 1200,
    clientContact: '@mimimimosa',
    hours: 2,
  },
  {
    client: 'Poa',
    day: dayjs().add(1, 'day').set('hour', 14).toDate(),
    price: 2200,
    done: false,
    hasPayedAdvancedDeposit: false,
    advancedDepositAmount: 0,
    clientContact: '@ppppoa',
    hours: 0,
  },
];
