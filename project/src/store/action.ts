import {createAction} from '@reduxjs/toolkit';
import { TypeSort } from '../const';

export const changeCity = createAction('main/changeCity', (payload: string) => ({payload}));

export const sortPlaces = createAction('main/sortPlaces', (payload: TypeSort) => ({payload}));
