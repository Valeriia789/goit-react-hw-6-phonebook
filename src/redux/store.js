import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    contacts: contactsReducer
    // contacts: [],
    // filter: '',
  },
});
