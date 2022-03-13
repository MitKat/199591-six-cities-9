import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{index: number}>('main/changeCity');
