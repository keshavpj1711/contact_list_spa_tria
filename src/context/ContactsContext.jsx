import { createContext, useContext, useReducer, useEffect } from "react";
import { saveContacts } from "../utils/localStorage";

const ContactsContext = createContext();

// Reducer actions
const contactsReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CONTACTS":
      return action.payload;
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "TOGGLE_FAVORITE":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export const ContactsProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactsReducer, []);

  // Save to localStorage whenever contacts change
  useEffect(() => {
    if (contacts.length > 0) {
      saveContacts(contacts);
    }
  }, [contacts]);

  const value = {
    contacts,
    dispatch,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts must be used within ContactsProvider");
  }
  return context;
};