import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction('main/redirectToRoute', (payload: string) => ({payload}));
