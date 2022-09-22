import { MdClose } from "react-icons/md";
import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={contact.group}
      />
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
