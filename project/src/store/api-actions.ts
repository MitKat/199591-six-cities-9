import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { loadHotel, loadHotelsNearby, loadOffers, loadReviews, redirectToRoute, requireAuthorization, saveUserData } from './action';
import { UserData }  from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { errorHandle } from '../services/error-handle';
import { CommentData } from '../types/comment-data';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchHotelAction = createAsyncThunk(
  'data/fetchHotel',
  async (id: string) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}`);
      store.dispatch(loadHotel(data));
    } catch (error) {
      store.dispatch(redirectToRoute(AppRoute.NotFound));
      errorHandle(error);
    }
  },
);

export const fetchHotelsNearbyAction = createAsyncThunk(
  'data/fetchHotelsNearby',
  async (id: string) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
      store.dispatch(loadHotelsNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: string) => {
    try {
      const {data} = await api.get(`${APIRoute.Reviews}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const response = await api.get(APIRoute.Login);
      store.dispatch(saveUserData(response.data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const response = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(response.data.token);
      store.dispatch(saveUserData(response.data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const newCommentAction = createAsyncThunk(
  'review/newComment',
  async ({comment, rating, hotelId}: CommentData) => {
    try {
      const {data} = await api.post(`${APIRoute.Reviews}/${hotelId}`, {comment, rating});
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

