export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Feb 22 2022 13:07:16 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 1.5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 6,
      isPro: true,
      name: 'MaxIvan',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Feb 22 2022 13:07:16 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 4.5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 7,
      isPro: true,
      name: 'Max',
    },
  },
];

