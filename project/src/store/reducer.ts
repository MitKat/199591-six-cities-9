import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, TypeSort } from '../const';
import { changeCity, loadOffers, requireAuthorization, sortPlaces } from './action';

const initialState = {
  currentCity: CITIES[0],
  currentSort: TypeSort.Popular,
  isDataLoaded: false,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});

export {reducer};
