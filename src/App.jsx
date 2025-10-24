import { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { ContactsProvider, useContacts } from "./context/ContactsContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { getContacts } from "./utils/fakeApi";
import { seedContacts } from "./utils/seedContacts";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/AddContactModal";
import SettingsModal from "./components/SettingsModal";
import Loader from "./components/Loader";

const AppContent = () => {
  const { dispatch } = useContacts();
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("grid");
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
      if (e.key === "/" && !isModalOpen && !isSettingsOpen) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }

      // Open modal on 'n'
      if (e.key === "n" && !isModalOpen && !isSettingsOpen && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        setIsModalOpen(true);
      }

      // Close modal on 'Escape'
      if (e.key === "Escape") {
        if (isModalOpen) setIsModalOpen(false);
        if (isSettingsOpen) setIsSettingsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, isSettingsOpen]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-200">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        onSettingsClick={() => setIsSettingsOpen(true)}
      />

      <div className={`transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'} border-l border-neutral-200 dark:border-neutral-800`}>
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddContact={() => setIsModalOpen(true)}
          searchInputRef={searchInputRef}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <main className="min-h-[calc(100vh-73px)]">
          {isLoading ? (
            <Loader />
          ) : (
            <ContactList
              searchTerm={searchTerm}
              currentView={currentView}
              sortOrder={sortOrder}
              viewMode={viewMode}
            />
          )}
        </main>
      </div>

      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: isDark ? "#171717" : "#ffffff",
            color: isDark ? "#e5e5e5" : "#171717",
            border: isDark ? "1px solid #262626" : "1px solid #e5e5e5",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ContactsProvider>
        <AppContent />
      </ContactsProvider>
    </ThemeProvider>
  );
}

export default App;