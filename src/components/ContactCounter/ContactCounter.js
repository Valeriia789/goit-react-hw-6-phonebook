import { useSelector } from 'react-redux'
import { getContacts } from '../../redux/selectors'
import css from './ContactCounter.module.css'

export const ContactCounter = () => {
  const contacts = useSelector(getContacts)
  // console.log(JSON.stringify(contacts));

  const count = contacts.reduce(
    (acc, contact) => {
      if (contact.group) {
        acc.group += 1
      }
      // else {
      //   acc.active += 1
      // }
      return acc
    },
    {
      // active: 0,
      group: 0
    }
  )

  return (
    <div>
      {/* <p className={css.text}>Active: {count.active}</p> */}
      <p className={css.text}>Group: {count.group}</p>
    </div>
  )
}
