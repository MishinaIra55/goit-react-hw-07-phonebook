import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactThunk';
import PropTypes from 'prop-types';

export const ContactItem = ( { contact: { id, name, phone } } ) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <li>
      <p>{name}</p>
      <p>{phone}</p>
      <button type='button' onClick={ handleDelete}>Delete</button>
    </li>
  )
}
ContactItem.proTypes = {

  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  )
}
