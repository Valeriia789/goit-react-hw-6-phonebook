import { combineReducers } from 'redux'
import { statusFilters } from './constants'

const contactsInitialState = [
  { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
  { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
  { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
  { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
]

const filtersInitialState = {
  status: statusFilters.all
}

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload]

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload)

    case 'contacts/toggleGroup':
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

const filtersReducer = (state = filtersInitialState, action) => {
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

// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReducer(state.contacts, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
})

// const initialState = {
//   contacts: [
//     { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
//     { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
//     { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
//     { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false }
//   ],
//   filters: {
//     status: statusFilters.all
//   }
// }

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload]
//       }
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         )
//       }
//     case 'contacts/toggleGroup':
//       return {
//         ...state,
//         contacts: state.contacts.map(contact => {
//           if (contact.id !== action.payload) {
//             return contact
//           }
//           return {
//             ...contact,
//             group: !contact.group
//           }
//         })
//       }
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload
//         }
//       }
//     default:
//       return state
//   }
// }
