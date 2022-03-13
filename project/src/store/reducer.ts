import { createReducer } from '@reduxjs/toolkit';
// import { CITIES } from '../const';
import { changeCity } from './action';

const initialState = {
  index: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.index = action.payload.index;
    });
});

export {reducer};
