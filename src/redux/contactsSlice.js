import { createSlice, nanoid } from '@reduxjs/toolkit'

const contactsInitialState = [
  { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
  { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
  { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
  { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
]

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer (state, action) {
        for (const contact of state) {
          if (contact.name === action.payload.name) {
            alert(`${action.payload.name} is already in contacts`)
            return
          }
        }
        state.push(action.payload)

        // const names = state.map(contact => contact.name)
        // if (names.find(contactName => contactName === action.payload.name)) {
        //   alert(`${action.payload.name} is already in contacts`)
        //   return
        // }
        // state.push(action.payload)
      },
      prepare (name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            group: false
          }
        }
      }
    },

    deleteContact (state, action) {
      const index = state.findIndex(contact => contact.id === action.payload)
      state.splice(index, 1)
    },

    toggleGroup (state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.group = !contact.group
          break
        }
      }
    }
  }
})


export const { addContact, deleteContact, toggleGroup } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;