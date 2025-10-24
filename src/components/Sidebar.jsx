import { Users, Star, Archive, Settings, Moon } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ currentView, setCurrentView }) => {
  const [darkMode, setDarkMode] = useState(true);

  const menuItems = [
    { id: "all", label: "All Contacts", icon: Users },
    { id: "favorites", label: "Favorites", icon: Star },
    { id: "archived", label: "Archived", icon: Archive },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-neutral-800 bg-neutral-950 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-neutral-100">Tria</h1>
        </div>
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
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-out mb-1 ${
                isActive
                  ? "bg-neutral-800 text-neutral-100"
                  : "text-neutral-400 hover:bg-neutral-900/50 hover:text-neutral-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="px-3 py-4 border-t border-neutral-800">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900/50 hover:text-neutral-200 transition-all duration-200 ease-out mb-1"
        >
          <Moon className="w-4 h-4" />
          <span className="text-sm font-medium">Theme</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900/50 hover:text-neutral-200 transition-all duration-200 ease-out">
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;