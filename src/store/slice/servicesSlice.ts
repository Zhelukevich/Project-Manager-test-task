import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';


export type IServices = {
  id: string;
  checked: boolean;
  title: string;
  brief: {
    name: string;
    tel: string;
    mail: string;
    messages: string | undefined;
    interestsGroup: string[];
    img: string;
  };

  price: number;
  time: {
    year: number;
    month: number;
    day: number;
  };
};

interface IServicesState {
  brief: IServices[];
}

const initialServicesState: IServicesState = {
  brief: [],
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState: initialServicesState,
  reducers: {

    addBrief: (state, action: PayloadAction<IServices>) => {
      const id = action.payload;
      state.brief.push(id);
    },

    deleteBrief: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.brief = state.brief.filter((item) => {
        return item.id !== id;
      });
    },

  },
});

export const { addBrief, deleteBrief } = servicesSlice.actions;

export const services = (state: RootState) => state.services;

export default servicesSlice.reducer;
