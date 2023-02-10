import styles from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice';
import PropTypes from 'prop-types';

export const ContactFilter = ( {value}) => {


  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  }

  return(
    <label className={styles.filter__label}>
      Find contacts by name
      <input
        className={styles.filter__input}
        type='text'
        value={value}
        onChange={onChangeFilter} />
    </label>
    )
}

ContactFilter.proTypes = {
 value:PropTypes.string.isRequired,
}
