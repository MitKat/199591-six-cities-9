import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, TypeSort } from '../const';

export const changeCity = createAction('main/changeCity', (payload: string) => ({payload}));

export const sortPlaces = createAction('main/sortPlaces', (payload: TypeSort) => ({payload}));

export const loadOffers = createAction('data/loadOffers', (payload: []) => ({payload}));

export const requireAuthorization = createAction('user/Authorization', (payload: AuthorizationStatus) => ({payload}));

export const getUserData = createAction('user/userData', (payload: string) => ({payload}));

export const redirectToRoute = createAction('main/redirectToRoute', (payload: string) => ({payload}));
