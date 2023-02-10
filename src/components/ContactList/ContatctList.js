import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);


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
      {getFilteredList().map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};
