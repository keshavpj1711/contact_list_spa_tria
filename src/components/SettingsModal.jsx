import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContacts } from "../context/ContactsContext";
import toast from "react-hot-toast";

const SettingsModal = ({ isOpen, onClose }) => {
  const { contacts } = useContacts();

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all contacts? This action cannot be undone.")) {
      localStorage.removeItem("contacts");
      toast.success("All contacts cleared. Refresh the page to see changes.", {
        duration: 3000,
        position: "bottom-center",
      });
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(contacts, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `contacts-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Contacts exported successfully!", {
      duration: 2000,
      position: "bottom-center",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Settings
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-4">
                <div className="space-y-4">
                  {/* Contact Stats */}
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                      Statistics
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          Total Contacts:
                        </span>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {contacts.length}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">
                          Favorites:
                        </span>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {contacts.filter((c) => c.favorite).length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={handleExport}
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Export Contacts (JSON)
                    </button>
                    <button
                      onClick={handleClearAll}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Clear All Contacts
                    </button>
                  </div>

                  {/* App Info */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center">
                      Tria Contact Dashboard v1.0.0
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center mt-1">
                      Built with React + Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsModal;