import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, INITIAL_USER, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: INITIAL_USER,
};

export const userProcess = createSlice({
  name: NameSpace.User,
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
