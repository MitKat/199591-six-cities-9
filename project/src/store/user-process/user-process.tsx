import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    email: '',
    avatarUrl: '',
    id: -1,
    isPro: false,
    name: '',
    token: '',
  },
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    saveUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, saveUserData} = userProcess.actions;
