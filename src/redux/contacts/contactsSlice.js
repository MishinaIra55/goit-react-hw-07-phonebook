import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import { addContact, deleteContact, fetchContacts } from './contactThunk';

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
  initialState: contactsInitState.contacts,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      state.items = action.payload;
      console.log(state.items);
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      // console.log(action.payload)
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => contact.id !== action.payload);

      },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const contactsReducer = contactsSlice.reducer;
