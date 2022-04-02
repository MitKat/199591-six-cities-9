import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/state';

const initialState: DataProcess = {
  offers: [],
  isDataLoaded: false,
  reviews: [],
  isDisabled: false,
  hotel: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    id: -1,
    images: [],
    isFavorite: false,
    isPremium: false,

    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: '',
  },
  hotelsNearby: [],
  favoritesOffer: [],
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    isFormEnabled: (state, action) => {
      state.isDisabled = action.payload;
    },
    loadHotel: (state, action) => {
      state.hotel = action.payload;
    },
    loadHotelsNearby: (state, action) => {
      state.hotelsNearby = action.payload;
    },
    loadFavoritesOffer: (state, action) => {
      state.favoritesOffer = action.payload;
    },
  },
});

export const {
  loadOffers,
  loadReviews,
  isFormEnabled,
  loadHotel,
  loadHotelsNearby,
  loadFavoritesOffer,
} = dataProcess.actions;
