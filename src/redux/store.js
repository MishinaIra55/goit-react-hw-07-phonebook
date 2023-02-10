import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


// const persistConfig = {
//   key: 'phonebook',
//   storage,
//   whitelist: ['contacts'],
// };
//
// const persistedReducer = persistReducer(persistConfig, contactReducer);
//
// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterReducer,
//   },
//
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
//
// export const persistor = persistStore(store);


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
