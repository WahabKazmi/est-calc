import { configureStore } from '@reduxjs/toolkit'
import { tabApi } from './services/tabs'

export const store = configureStore({
  reducer: {
    [tabApi.reducerPath]: tabApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tabApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch