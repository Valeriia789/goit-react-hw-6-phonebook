import { statusFilters } from './constants'
import { addContact, deleteContact, toggleGroup, setStatusFilter } from "./actions";

const contactsInitialState = [
  { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
  { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
  { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
  { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
]

const filtersInitialState = {
  status: statusFilters.all
}

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      const names = state.map(contact => contact.name)
      console.log(names)
      console.log(action.payload.name)

      if (names.find(myContact => myContact === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts`)
        return
      }
      return [...state, action.payload]

    case deleteContact.type:
      return state.filter(contact => contact.id !== action.payload)

    case toggleGroup.type:
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact
        }
        return { ...contact, group: !contact.group }
      })

    default:
      return state
  }
}

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload
      }

    default:
      return state
  }
}




// import { combineReducers } from 'redux'
// import { statusFilters } from './constants'

// const contactsInitialState = [
//   { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
//   { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
//   { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
//   { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
// ]

// const filtersInitialState = {
//   status: statusFilters.all
// }

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       const names = state.map(contact => contact.name)
//       console.log(names)
//       console.log(action.payload.name)

//       if (names.find(myContact => myContact === action.payload.name)) {
//         alert(`${action.payload.name} is already in contacts`)
//         return state
//       }
//       return [...state, action.payload]

//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload)

//     case 'contacts/toggleGroup':
//       return state.map(contact => {
//         if (contact.id !== action.payload) {
//           return contact
//         }
//         return { ...contact, group: !contact.group }
//       })

//     default:
//       return state
//   }
// }

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload
//       }

//     default:
//       return state
//   }
// }

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer
// })
