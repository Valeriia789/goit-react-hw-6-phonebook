import React from 'react'
import { useSelector } from 'react-redux'

export const SingleContactPage = ({ match }) => {
  const { contactId } = match.params

  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === contactId)
  )

  if (!contact) {
    return (
      <section>
        <h2>Contact not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{contact.name}</h2>
        <p >{contact.number}</p>
      </article>
    </section>
  )
}