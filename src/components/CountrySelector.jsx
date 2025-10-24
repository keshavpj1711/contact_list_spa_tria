import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { countries } from "../utils/countries";

const CountrySelector = ({ isOpen, onClose, selectedCountry, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  const handleSelect = (country) => {
    onSelect(country);
    onClose();
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg w-full max-w-md shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
                <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Select Country Code
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-3 border-b border-neutral-200 dark:border-neutral-800">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search country or code..."
                    className="w-full pl-9 pr-3 py-2 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Country List */}
              <div className="max-h-[400px] overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  <div className="py-1">
                    {filteredCountries.map((country) => (
                      <button
                        key={`${country.code}-${country.name}`}
                        onClick={() => handleSelect(country)}
                        className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left ${
                          selectedCountry?.code === country.code
                            ? "bg-blue-50 dark:bg-blue-950/30"
                            : ""
                        }`}
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                            {country.name}
                          </div>
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                          {country.code}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-sm text-neutral-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CountrySelector;