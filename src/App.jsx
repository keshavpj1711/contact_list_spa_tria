import { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { ContactsProvider, useContacts } from "./context/ContactsContext";
import { getContacts } from "./utils/fakeApi";
import { seedContacts } from "./utils/seedContacts";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/AddContactModal";
import Loader from "./components/Loader";

const AppContent = () => {
  const { dispatch } = useContacts();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchInputRef = useRef(null);

  // Load contacts on mount
  useEffect(() => {
    const loadInitialContacts = async () => {
      seedContacts();
      const contacts = await getContacts();
      dispatch({ type: "LOAD_CONTACTS", payload: contacts });
      setIsLoading(false);
    };

    loadInitialContacts();
  }, [dispatch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focus search on '/'
      if (e.key === "/" && !isModalOpen) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }

      // Open modal on 'n'
      if (e.key === "n" && !isModalOpen && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        setIsModalOpen(true);
      }

      // Close modal on 'Escape'
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <div className="ml-64">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddContact={() => setIsModalOpen(true)}
          searchInputRef={searchInputRef}
        />

        <main className="min-h-[calc(100vh-73px)]">
          {isLoading ? (
            <Loader />
          ) : (
            <ContactList searchTerm={searchTerm} currentView={currentView} />
          )}
        </main>
      </div>

      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Toaster
        toastOptions={{
          style: {
            background: "#171717",
            color: "#e5e5e5",
            border: "1px solid #262626",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <ContactsProvider>
      <AppContent />
    </ContactsProvider>
  );
}

export default App;