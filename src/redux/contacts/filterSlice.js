import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';



export const filterSlice = createSlice({
  name: 'filters',
  initialState: contactsInitState.filter,
  reducers: {
    filterContact(state, action) {
      return state = action.payload;
    },
  },
});


export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
