export const saveContacts = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

export const loadContacts = () => {
  return JSON.parse(localStorage.getItem("contacts") || "[]");
};