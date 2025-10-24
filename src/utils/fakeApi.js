import { loadContacts, saveContacts } from "./localStorage";

export const getContacts = async () => {
  await new Promise((res) => setTimeout(res, 400));
  return loadContacts();
};

export const saveContactList = async (contacts) => {
  await new Promise((res) => setTimeout(res, 400));
  saveContacts(contacts);
  return contacts;
};