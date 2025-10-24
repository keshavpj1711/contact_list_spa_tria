import { Users, Star, Settings, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Sidebar = ({ currentView, setCurrentView, isCollapsed, setIsCollapsed, onSettingsClick }) => {
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { id: "all", label: "All Contacts", icon: Users },
    { id: "favorites", label: "Favorites", icon: Star },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col z-20"
    >
      {/* Logo and Collapse Button */}
      <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
            >
              Tria
            </motion.h1>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              title={isCollapsed ? item.label : ""}
              className={`w-full flex items-center ${
                isCollapsed ? "justify-center" : "gap-3"
              } px-3 py-2 rounded-lg transition-all duration-200 ease-out mb-1 ${
                isActive
                  ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-200"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="px-3 py-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          onClick={toggleTheme}
          title={isCollapsed ? "Toggle theme" : ""}
          className={`w-full flex items-center ${
            isCollapsed ? "justify-center" : "gap-3"
          } px-3 py-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all duration-200 ease-out mb-1`}
        >
          {isDark ? (
            <Moon className="w-4 h-4 flex-shrink-0" />
          ) : (
            <Sun className="w-4 h-4 flex-shrink-0" />
          )}
          {!isCollapsed && (
            <span className="text-sm font-medium">
              {isDark ? "Dark" : "Light"} Mode
            </span>
          )}
        </button>
        <button
          onClick={onSettingsClick}
          title={isCollapsed ? "Settings" : ""}
          className={`w-full flex items-center ${
            isCollapsed ? "justify-center" : "gap-3"
          } px-3 py-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all duration-200 ease-out`}
        >
          <Settings className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && (
            <span className="text-sm font-medium">Settings</span>
          )}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;