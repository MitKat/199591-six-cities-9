import { createReducer } from '@reduxjs/toolkit';
import { CITIES, TypeSort } from '../const';
import { changeCity, sortPlaces } from './action';

const initialState = {
  selectedCity: CITIES[0],
  currentSort: TypeSort.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(sortPlaces, (state, action) => {
      state.currentSort = action.payload;
    });
});

export {reducer};
