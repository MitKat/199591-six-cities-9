import { createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace, TypeSort } from '../../const';
import { MainProcess } from '../../types/state';

const initialState: MainProcess = {
  currentCity: CITIES[0],
  currentSort: TypeSort.Popular,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
    sortPlaces: (state, action) => {
      state.currentSort = action.payload;
    },
  },
});

export const {changeCity, sortPlaces} = mainProcess.actions;
