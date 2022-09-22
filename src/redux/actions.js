import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      group: false,
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const toggleGroup = contactId => {
  return {
    type: "contacts/toggleGroup",
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};