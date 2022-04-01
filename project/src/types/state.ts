import { AuthorizationStatus, TypeSort } from '../const.js';
import {store} from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';
import { UserData } from './user-data.js';

export type MainProcess = {
  currentCity: string,
  currentSort: TypeSort,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserData,
};

export type DataProcess = {
  offers: Offer[],
  isDataLoaded: boolean,
  reviews: Review[],
  isDisabled: boolean,
  hotel: Offer,
  hotelsNearby: Offer[],
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
