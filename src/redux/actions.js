// import { createAction } from '@reduxjs/toolkit'
// import { nanoid } from 'nanoid'

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: nanoid(),
//         group: false,
//         name,
//         number
//       }
//     }
//   }
// )
// export const deleteContact = createAction('contacts/deleteContact')
// export const toggleGroup = createAction('contacts/toggleGroup')
// export const setStatusFilter = createAction('filters/setStatusFilter')



// export const addContact = (name, number) => {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//       group: false,
//       name,
//       number,
//     },
//   };
// };
// export const deleteContact = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };
// export const toggleGroup = contactId => {
//   return {
//     type: "contacts/toggleGroup",
//     payload: contactId,
//   };
// };
// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };
