import { Star, Mail, Phone, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useContacts } from "../context/ContactsContext";
import toast from "react-hot-toast";

const ContactCard = ({ contact, index }) => {
  const { dispatch } = useContacts();

  const handleToggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: contact.id });
    toast.success(
      contact.favorite ? "Removed from favorites" : "Added to favorites",
      {
        duration: 2000,
        position: "bottom-center",
      }
    );
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CONTACT", payload: contact.id });
    toast.success("Contact deleted", {
      duration: 2000,
      position: "bottom-center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-white dark:bg-neutral-900/30 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 transition-all duration-200 ease-out"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex-shrink-0"
        />

        {/* Contact Info */}
        <div className="flex-1 min-w-0 pr-10">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              {contact.name}
            </h3>
            <button
              onClick={handleToggleFavorite}
              className="flex-shrink-0 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded transition-colors"
            >
              <Star
                className={`w-4 h-4 ${
                  contact.favorite
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
              />
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <Mail className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{contact.email}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Button (shows on hover) */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded transition-all"
      >
        <Trash2 className="w-4 h-4 text-red-500" />
      </button>
    </motion.div>
  );
};

export default ContactCard;