import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getStatusFilter } from '../../redux/contacts/contactsselectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);


  const getFilteredList = () => {

    if (filter === '') {
      return contacts;
    } else {
      const normalizeFilter = filter.toLowerCase();

      return contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    }
  };

  return (

    <ul>
      {getFilteredList() && getFilteredList().map(item => (

        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};
