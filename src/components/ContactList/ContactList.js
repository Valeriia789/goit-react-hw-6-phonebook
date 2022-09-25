import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import { getFilteredContacts } from '../../redux/selector'

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  const contacts = useSelector(getFilteredContacts);
  const totalContacts = contacts.length;

  return (
    <section>
      <h2>Contacts</h2>

      <ul>
        {Array.isArray(contacts)
          ? contacts.map(contact => {
              return (
                <ContactListItem
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  group={contact.group}
                ></ContactListItem>
              );
            })
          : null}
      </ul>

      <div>
        <p>
          Total contacts:
          {totalContacts}
        </p>
        <p>
          Close friends:
          {/* {closeFriendsGroup} */}
        </p>
      </div>
    </section>
  );
};
