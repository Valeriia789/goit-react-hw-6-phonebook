import { useSelector } from 'react-redux'
import { Contact } from 'components/Contact/Contact'
import { getContacts, getStatusFilter } from '../../redux/selectors'
import css from './ContactList.module.css'
import { statusFilters } from '../../redux/constants'

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    // case statusFilters.active:
    //   return contacts.filter(contact => !contact.group);
    // case statusFilters.search:
    //   return contacts.filter(contact => contact.name.toLowerCase().includes(contact.search.toLowerCase()))
    case statusFilters.group:
      return contacts.filter(contact => contact.group)
    default:
      return ([...contacts])
  }
}

export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const statusFilter = useSelector(getStatusFilter)
  const visibleContacts = getVisibleContacts(contacts, statusFilter)

  console.log(contacts);
  // console.log(statusFilter);
  console.log(visibleContacts);

  return (
    <div>
      <input type='text' placeholder='Find contact' />

      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
