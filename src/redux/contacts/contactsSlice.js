import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import { getContactsThunk } from './contactThunk';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//
//         state.contacts.push(action.payload);
//       },
//       prepare(data) {
//         return {
//           payload: {
//             ...data,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//
//       state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//     },
//
//   },
// });
//
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactReducer = contactsSlice.reducer;


const contactsSlice = createSlice({
  name:'contacts',
  initialState: contactsInitState,
  extraReducers: {
    [getContactsThunk.pending](state) {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [getContactsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const contactsReducer = contactsSlice.reducer;
