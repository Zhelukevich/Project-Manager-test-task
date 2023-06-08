import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

const initialUserState = {
  id: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {

    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },

    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.token = null;
    },

  },
});

export const { setUser, removeUser } = userSlice.actions;

export const users = (state: RootState) => state.users;

export default userSlice.reducer;
