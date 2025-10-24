import { useContacts } from "../context/ContactsContext";
import { useDebounce } from "../hooks/useDebounce";
import ContactCard from "./ContactCard";
import EmptyState from "./EmptyState";

const ContactList = ({ searchTerm, currentView, sortOrder, viewMode }) => {
  const { contacts } = useContacts();
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Filter contacts based on search and current view
  let filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      contact.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      contact.phone.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesView =
      currentView === "all" ||
      (currentView === "favorites" && contact.favorite);

    return matchesSearch && matchesView;
  });

  // Sort contacts alphabetically
  filteredContacts = [...filteredContacts].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
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
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
          {filteredContacts.length} contact{filteredContacts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Grid or List View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredContacts.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filteredContacts.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} viewMode="list" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;