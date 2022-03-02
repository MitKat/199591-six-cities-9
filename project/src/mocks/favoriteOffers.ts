export type FavoriteOffer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    }
    name: string;
  }
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export const favoriteOffers: FavoriteOffer[] = [
  {
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful &amp; luxurious studio at great location',
    type: 'Apartment',
    bedrooms: 4,
    goods: ['Heating', 'Wi-Fi', 'Baby seat', 'Cabel TV'],
    isFavorite: true,
    isPremium: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 3.4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
  },
  {
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful &amp; luxurious studio at great location',
    type: 'Apartment',
    bedrooms: 2,
    goods: ['Heating', 'Fridge', 'Baby seat', 'Cabel TV', 'Coffee machine'],
    isFavorite: true,
    isPremium: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Svetlana',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-02.jpg',
    price: 520,
    rating: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
  },
  {
    id: 3,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    title: 'Wood and stone place',
    type: 'Private room',
    bedrooms: 6,
    goods: ['Heating', 'Wi-Fi', 'Baby seat', 'Cabel TV'],
    isFavorite: true,
    isPremium: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 14,
    previewImage: 'img/apartment-03.jpg',
    price: 720,
    rating: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    bedrooms: 3,
    goods: ['Heating', 'Baby seat', 'Cabel TV'],
    isFavorite: true,
    isPremium: true,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 8,
      isPro: false,
      name: 'Angelina',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
  },
];
