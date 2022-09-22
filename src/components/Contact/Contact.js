import { MdClose } from 'react-icons/md'
import css from './Contact.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact, toggleGroup } from '../../redux/actions'

export const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteContact(contact.id))
  const handleToggle = () => dispatch(toggleGroup(contact.id))

  return (
    <div className={css.wrapper}>
      <input
        type='checkbox'
        className={css.checkbox}
        onChange={handleToggle}
        checked={contact.group}
      />
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  )
}
