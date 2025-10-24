import { Users, Search } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = ({ searchTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-4">
        {searchTerm ? (
          <Search className="w-8 h-8 text-neutral-400 dark:text-neutral-600" />
        ) : (
          <Users className="w-8 h-8 text-neutral-400 dark:text-neutral-600" />
        )}
      </div>

      <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
        {searchTerm ? "No contacts found" : "No contacts yet"}
      </h3>

      <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center max-w-sm">
        {searchTerm
          ? `We couldn't find any contacts matching "${searchTerm}". Try a different search term.`
          : "Get started by adding your first contact using the button above."}
      </p>
    </motion.div>
  );
};

export default EmptyState;