import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContatctList';
import { ContactFilter } from './ContactFilter/ContactFilter';


export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <ContactFilter/>
      <ContactList />
    </>
  );
};
