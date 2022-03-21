import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { loadOffers } from './action';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get('/hotels');
    store.dispatch(loadOffers(data));
  },
);
