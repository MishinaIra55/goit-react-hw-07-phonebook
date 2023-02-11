import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContatctList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactThunk';
import { getError, getIsLoading } from '../redux/contacts/contactsselectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactFilter/>
      <ContactList />
    </>
  );
};
