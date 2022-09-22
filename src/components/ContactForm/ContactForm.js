import { Button } from 'components/Button/Button'
import css from './ContactForm.module.css'

import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/actions'

export const ContactForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addContact(form.elements.name.value))
    form.reset()
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type='text'
        name='name'
        placeholder='Enter name...'
      />
      <input
        className={css.field}
        type='text'
        name='number'
        placeholder='Enter number...'
      />
      <Button type='submit'>Add contact</Button>
    </form>
  )
}
