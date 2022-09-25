import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  
  const totalContacts = contacts.length;
  // const filteredContacts = getFilteredContacts(contacts)

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
