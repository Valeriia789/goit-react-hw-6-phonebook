import { Button } from 'components/Button/Button'
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    form.reset()
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type='text'
        name='text'
        placeholder='Enter name...'
      />
      <input
        className={css.field}
        type='text'
        name='text'
        placeholder='Enter number...'
      />
      <Button type='submit'>Add contact</Button>
    </form>
  )
}
