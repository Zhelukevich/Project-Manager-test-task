import { configureStore } from '@reduxjs/toolkit';

import servicesReducer from './slice/servicesSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    if (typeof window !== 'undefined') {
      localStorage.setItem('persistentState', serializedState);
    }
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem('persistentState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
