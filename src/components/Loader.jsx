import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
          >
            <div className="flex items-start gap-4">
              {/* Avatar Skeleton */}
              <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

              {/* Content Skeleton */}
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse w-full" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse w-2/3" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader;