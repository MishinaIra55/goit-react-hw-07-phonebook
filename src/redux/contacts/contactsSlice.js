import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: {
      reducer(state, action) {

        state.contacts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {

      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },

  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
