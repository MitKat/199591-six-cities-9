import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (payload: number) => ({payload}));
