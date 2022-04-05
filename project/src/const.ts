import { getRandomNumber } from './utils';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/*',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}

export enum SizeMarker {
  Width = 40,
  Height = 40,
}

export enum SizeAnchorMarker {
  Width = 20,
  Height = 40,
}

export enum UrlMarker {
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const RANDOM_INDEX = Number(getRandomNumber(0, CITIES.length-1));

export enum TypeSort {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum NameSpace {
  Main = 'MAIN',
  User = 'USER',
  Data = 'DATA',
}

export const INITIAL_USER = {
  email: '',
  avatarUrl: '',
  id: -1,
  isPro: false,
  name: '',
  token: '',
};

export const INITIAL_HOTEL = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  description: '',
  goods: [],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  id: -1,
  images: [],
  isFavorite: false,
  isPremium: false,

  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
};

export const ValidatePattern = {
  numbersPassword: /[0-9]+/,
  lettersPassword: /[a-zA-Zа-яА-Я]+/,
};
