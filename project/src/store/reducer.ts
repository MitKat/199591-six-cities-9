import { createReducer } from '@reduxjs/toolkit';
import { CITIES, TypeSort } from '../const';
import { changeCity, loadOffers, sortPlaces } from './action';

const initialState = {
  currentCity: CITIES[0],
  currentSort: TypeSort.Popular,
  isDataLoaded: false,
  offers: [],
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
    });
});

export {reducer};
