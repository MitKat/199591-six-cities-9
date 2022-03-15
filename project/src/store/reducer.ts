import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortPlaces } from './action';

const initialState = {
  index: 0,
  indexSort: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.index = action.payload;
    })
    .addCase(sortPlaces, (state, action) => {
      state.indexSort = action.payload;
    });
});

export {reducer};
