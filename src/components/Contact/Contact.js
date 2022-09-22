import { MdClose } from 'react-icons/md'
import css from './Contact.module.css'

// Импортируем хук
import { useDispatch } from 'react-redux'
// Импортируем генератор экшена
import { deleteContact, toggleGroup } from '../../redux/actions'

export const Contact = ({ contact }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch()

  // Вызываем генератор экшена и передаём идентификатор контакта
  // Отправляем результат - экшен удаления контакта
  const handleDelete = () => dispatch(deleteContact(contact.id))

  // Отправляем результат - экшен переключения статуса контакта
  const handleToggle = () => dispatch(toggleGroup(contact.id));

  return (
    <div className={css.wrapper}>
      <input type='checkbox' className={css.checkbox} onChange={handleToggle} checked={contact.group} />
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  )
}
