import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = contacts.find((user) => user.name === form.elements.name.value);

    if (contactData) {
      alert(`${form.elements.name.value} is already in contacts`);
    } else {
      dispatch(addContact(
        {
          name: form.elements.name.value,
          number: form.elements.number.value,
        },
      ));
      form.reset();
    }

  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            className={styles.input}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    </>
  );
};
