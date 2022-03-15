import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (payload: number) => ({payload}));

export const sortPlaces = createAction('main/sortPlaces', (payload: number) => ({payload}));
