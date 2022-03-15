export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const WIDTH_MARKER = 40;
export const HEIGHT_MARKER = 40;
export const ANCHOR_MARKER = 20;
export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SORT_TYPE = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const Sort = {
  Popular: SORT_TYPE[0],
  PriceUp: SORT_TYPE[1],
  PriceDown: SORT_TYPE[2],
  Rating: SORT_TYPE[3],
};

