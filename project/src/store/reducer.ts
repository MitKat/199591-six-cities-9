import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, TypeSort } from '../const';
import { changeCity, loadOffers, requireAuthorization, sortPlaces, saveUserData, loadReviews, loadHotel, loadHotelsNearby } from './action';

const initialState = {
  currentCity: CITIES[0],
  currentSort: TypeSort.Popular,
  isDataLoaded: false,
  offers: [],
  reviews: [],
  hotelsNearby: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    email: '',
    avatarUrl: '',
    id: -1,
    isPro: false,
    name: '',
    token: '',
  },
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadHotel, (state, action) => {
      state.hotel = action.payload;
    })
    .addCase(loadHotelsNearby, (state, action) => {
      state.hotelsNearby = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
