export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
    bedrooms: number;
    city: {
      location: Location,
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
    location: Location;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
};

export const offers: Offer[] = [
  {
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful studio at great location',
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
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
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
      name: 'Amsterdam',
    },
  },
  {
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-03.jpg'],
    title: 'Beautiful &amp; luxurious studio at great location',
    type: 'Apartment',
    bedrooms: 2,
    goods: ['Heating', 'Fridge', 'Baby seat', 'Cabel TV', 'Coffee machine'],
    isFavorite: false,
    isPremium: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Svetlana',
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-02.jpg',
    price: 520,
    rating: 1,
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
      latitude: 48.8909553943508,
      longitude: 2.359309666406198,
      zoom: 10,
    },
    maxAdults: 14,
    previewImage: 'img/apartment-03.jpg',
    price: 720,
    rating: 5,
    city: {
      location: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 10,
      },
      name: 'Paris',
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
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
      name: 'Amsterdam',
    },
  },
];
