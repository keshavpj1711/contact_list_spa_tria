import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContacts } from "../context/ContactsContext";
import { countries } from "../utils/countries";
import CountrySelector from "./CountrySelector";
import toast from "react-hot-toast";

const AddContactModal = ({ isOpen, onClose }) => {
  const { dispatch } = useContacts();
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "+1"));
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newContact = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: `${selectedCountry.code} ${data.phoneNumber}`,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        data.name
      )}`,
      favorite: false,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    toast.success("Contact added successfully!", {
      duration: 2000,
      position: "bottom-center",
    });
    reset();
    onClose();
  };

  return (
    <>
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
                    Add New Contact
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4">
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                        className="w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john.doe@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Phone
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Button */}
                        <button
                          type="button"
                          onClick={() => setIsCountrySelectorOpen(true)}
                          className="w-28 px-3 py-2 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-center gap-1"
                        >
                          <span>{selectedCountry.flag}</span>
                          <span className="font-mono">{selectedCountry.code}</span>
                        </button>

                        {/* Phone Number Input */}
                        <input
                          id="phoneNumber"
                          type="tel"
                          {...register("phoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[\d\s()-]+$/,
                              message: "Invalid phone number",
                            },
                          })}
                          className="flex-1 px-3 py-2 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="555 123 4567"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-lg text-sm font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Add Contact
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Country Selector Modal */}
      <CountrySelector
        isOpen={isCountrySelectorOpen}
        onClose={() => setIsCountrySelectorOpen(false)}
        selectedCountry={selectedCountry}
        onSelect={setSelectedCountry}
      />
    </>
  );
};

export default AddContactModal;