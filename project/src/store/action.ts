import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, TypeSort } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction('main/changeCity', (payload: string) => ({payload}));

export const sortPlaces = createAction('main/sortPlaces', (payload: TypeSort) => ({payload}));

export const loadOffers = createAction('data/loadOffers', (payload: []) => ({payload}));

export const loadReviews = createAction('data/loadReviews', (payload: []) => ({payload}));

export const loadHotelsNearby = createAction('data/loadHotelsNearby', (payload: []) => ({payload}));

export const loadHotel = createAction('data/loadHotel', (payload) => ({payload}));

export const requireAuthorization = createAction('user/Authorization', (payload: AuthorizationStatus) => ({payload}));

export const saveUserData = createAction('user/userData', (payload: UserData) => ({payload}));

export const redirectToRoute = createAction('main/redirectToRoute', (payload: string) => ({payload}));
