import { useContacts } from "../context/ContactsContext";
import { useDebounce } from "../hooks/useDebounce";
import ContactCard from "./ContactCard";
import EmptyState from "./EmptyState";

const ContactList = ({ searchTerm, currentView }) => {
  const { contacts } = useContacts();
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Filter contacts based on search and current view
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      contact.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      contact.phone.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesView =
      currentView === "all" ||
      (currentView === "favorites" && contact.favorite) ||
      (currentView === "archived" && contact.archived);

    return matchesSearch && matchesView;
  });

  if (filteredContacts.length === 0) {
    return <EmptyState searchTerm={debouncedSearch} />;
  }

  return (
    <div className="px-6 py-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {currentView === "all" && "All Contacts"}
          {currentView === "favorites" && "Favorite Contacts"}
          {currentView === "archived" && "Archived Contacts"}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
          {filteredContacts.length} contact{filteredContacts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContacts.map((contact, index) => (
          <ContactCard key={contact.id} contact={contact} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;