import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, TypeSort } from '../const';
import { changeCity, loadOffers, requireAuthorization, sortPlaces, getUserData } from './action';

const initialState = {
  currentCity: CITIES[0],
  currentSort: TypeSort.Popular,
  isDataLoaded: false,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    email: '',
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(sortPlaces, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.user.email = action.payload;
    });
});

export {reducer};
