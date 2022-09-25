import { createSlice } from '@reduxjs/toolkit'

const contactsInitialState = [
  { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
  { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
  { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
  { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
]

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsInitialState
  },
  reducers: {
    addContact: (state) => {
    },

    deleteContact: (state) => {
    },

  },
})

export const { addContact, deleteContact } = contactsSlice.actions
const contactsReducer = contactsSlice.reducer

export default contactsReducer