import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContatctList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from '../redux/contacts/contactThunk';


export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

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
