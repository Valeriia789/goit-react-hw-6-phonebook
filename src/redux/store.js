import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer, contactsListReduser } from './contactsSlice'
import { filtersReducer } from './filtersSlice'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

export const store = configureStore({
  reducer: {
    contacts: contactsListReduser,
    filters: filtersReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
