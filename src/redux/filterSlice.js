import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter (state, action) {
      state = action.payload;
      // console.log(action.payload.nativeEvent.data);
      console.log(state);
    },

    // getFilteredContacts (contacts) {
    //   if (filter) {
    //     return contacts.filter(contact =>
    //       contact.name.toLowerCase().includes(filter.toLowerCase())
    //     )
    //   }
    //   return contacts
    // }
  },
});

export const { updateFilter, getFilteredContacts } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export default filterReducer;
