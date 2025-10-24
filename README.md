# 📇 Tria Contact Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-ff0055?style=for-the-badge&logo=framer&logoColor=white)

**A modern, Linear-inspired contact management SPA with advanced UI/UX patterns**

[Live Demo](#) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## 🎯 Project Overview

Tria Contact Dashboard is a sophisticated single-page application that demonstrates modern React development practices, advanced state management, and polished UI/UX design. Built with performance and user experience in mind, it showcases industry-standard patterns and best practices.

### 🎨 Design Philosophy

- **Linear-inspired aesthetic**: Clean, minimalist interface with attention to micro-interactions
- **Dark mode first**: Fully theme-aware with seamless light/dark mode switching
- **Performance optimized**: Debounced search, optimized re-renders, and smooth 60fps animations
- **Accessibility focused**: Keyboard navigation, proper ARIA labels, and semantic HTML

---

## ✨ Key Features

### 🔍 **Smart Search & Filtering**
- **Real-time search** with 300ms debouncing for optimal performance
- **Multi-field search** across name, email, and phone numbers
- **Filter by favorites** with dedicated view in sidebar
- **Alphabetical sorting** with ascending/descending toggle

### 📋 **Contact Management**
- **Add contacts** via validation-powered modal form
- **Country code selector** with searchable modal (150+ countries)
- **Favorite contacts** with star toggle and dedicated view
- **Delete contacts** with hover-revealed actions
- **Auto-save to localStorage** for data persistence

### 🎨 **Modern UI/UX**
- **Dual view modes**: Grid and List layouts with optimized rendering
- **Framer Motion animations**: Stagger animations, smooth transitions, and micro-interactions
- **Collapsible sidebar**: Space-efficient navigation with animated width transitions
- **Toast notifications**: Contextual feedback for all user actions
- **Skeleton loaders**: Enhanced perceived performance during data loading
- **Empty states**: Friendly prompts when no contacts exist

### ⌨️ **Keyboard Shortcuts**
Power user features for enhanced productivity:
- **`/`** - Focus search bar instantly
- **`n`** - Quick-add new contact
- **`Esc`** - Close any modal

### 🌓 **Theme System**
- **System-aware dark mode** with localStorage persistence
- **Smooth theme transitions** across all components
- **Proper color contrast** for accessibility (WCAG AA compliant)

---

## 🛠️ Tech Stack

### **Frontend Core**
- **React 18.3** - Latest React with Concurrent Features
- **Vite 6.0** - Lightning-fast build tool with HMR
- **Tailwind CSS 3.4** - Utility-first CSS with JIT compiler

### **State Management**
- **Context API + useReducer** - Lightweight, scalable state management
- **Custom hooks** - Reusable logic (useDebounce, useContacts, useTheme)
- **localStorage API** - Client-side persistence with auto-save

### **UI & Animations**
- **Framer Motion 11.15** - Production-ready animation library
- **Lucide React** - 1000+ beautiful, consistent icons
- **React Hot Toast** - Accessible toast notifications
- **DiceBear Avatars** - Dynamic avatar generation

### **Forms & Validation**
- **React Hook Form 7.54** - Performant form library with validation
- **Native validation** - Email, phone, and text pattern matching

### **Developer Experience**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Git** - Version control with conventional commits

---

## 📁 Project Architecture

```
contact_list_spa_tria/
├── src/
│   ├── components/
│   │   ├── AddContactModal.jsx      # Form modal with validation
│   │   ├── ContactCard.jsx          # Grid/List view contact card
│   │   ├── ContactList.jsx          # Contact collection with filtering
│   │   ├── CountrySelector.jsx      # Searchable country picker modal
│   │   ├── EmptyState.jsx           # No contacts placeholder
│   │   ├── Header.jsx               # Search, sort, view mode controls
│   │   ├── Loader.jsx               # Skeleton loading state
│   │   ├── SettingsModal.jsx        # App settings and stats
│   │   └── Sidebar.jsx              # Collapsible navigation
│   ├── context/
│   │   ├── ContactsContext.jsx      # Global contacts state + reducer
│   │   └── ThemeContext.jsx         # Dark mode state + persistence
│   ├── hooks/
│   │   └── useDebounce.js           # Search performance optimization
│   ├── utils/
│   │   ├── countries.js             # 150+ country codes with flags
│   │   ├── fakeApi.js               # Simulated async API (400ms delay)
│   │   ├── localStorage.js          # Storage abstraction layer
│   │   └── seedContacts.js          # Demo data initialization
│   ├── App.jsx                      # Main app with routing logic
│   ├── main.jsx                     # React 18 root + providers
│   └── index.css                    # Tailwind imports + global styles
├── public/                          # Static assets
├── .eslintrc.cjs                    # ESLint configuration
├── tailwind.config.js               # Tailwind customization
├── vite.config.js                   # Vite build configuration
└── package.json                     # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/keshavpj1711/contact_list_spa_tria.git
   cd contact_list_spa_tria
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build          # Build optimized production bundle
npm run preview        # Preview production build locally
```

---

## 💡 Implementation Highlights

### **State Management Pattern**
Implemented a Redux-like pattern using Context API + useReducer for predictable state updates:
```javascript
// Centralized state with action-based updates
dispatch({ type: "ADD_CONTACT", payload: newContact })
dispatch({ type: "TOGGLE_FAVORITE", payload: contactId })
dispatch({ type: "DELETE_CONTACT", payload: contactId })
```

### **Performance Optimizations**
- **Debounced search** (300ms) prevents excessive re-renders
- **Conditional rendering** with AnimatePresence for smooth animations
- **LocalStorage auto-save** with optimistic UI updates
- **Memoized components** to prevent unnecessary re-renders

### **Advanced UI Patterns**
- **Searchable modal selector** for country codes (better UX than 150+ item dropdown)
- **Stagger animations** for contact cards with index-based delays
- **Hover-revealed actions** for cleaner interface
- **Dual-view layouts** optimized for different screen sizes

### **Accessibility Features**
- **Keyboard navigation** with intuitive shortcuts
- **Focus management** in modals
- **ARIA labels** for screen readers
- **Color contrast** meeting WCAG AA standards

---

## 📊 Features Breakdown

| Feature | Description | Technologies |
|---------|-------------|--------------|
| **Contact CRUD** | Add, view, favorite, delete contacts | React Hook Form, Context API |
| **Real-time Search** | Debounced multi-field search | useDebounce hook, Array.filter |
| **Data Persistence** | Auto-save all changes | localStorage API |
| **View Modes** | Grid and List layouts | Conditional rendering, CSS Grid/Flexbox |
| **Theme Switching** | Dark/Light mode with persistence | Context API, Tailwind dark: classes |
| **Animations** | Smooth transitions and micro-interactions | Framer Motion |
| **Form Validation** | Email, phone, name validation | React Hook Form, Regex patterns |
| **Toast Notifications** | Action feedback | React Hot Toast |
| **Country Selector** | Searchable country code picker | Custom modal component |
| **Keyboard Shortcuts** | Power user features | useEffect + event listeners |
| **Responsive Design** | Mobile-first approach | Tailwind responsive utilities |
| **Loading States** | Skeleton loaders | Framer Motion + Tailwind |

---

## 🎮 Usage Guide

### Adding a Contact

1. Click **"Add Contact"** button (or press **`n`**)
2. Fill in contact details:
   - **Name**: Minimum 2 characters
   - **Email**: Valid email format (validated)
   - **Phone**: Click country flag to search 150+ countries, then enter number
3. Click **"Add Contact"** to save

### Searching Contacts

- Click search bar or press **`/`**
- Type to search across name, email, and phone
- Results update in real-time (debounced)

### Managing Contacts

- **Favorite**: Click ⭐ star icon
- **View Favorites**: Click "Favorites" in sidebar
- **Delete**: Hover over contact, click 🗑️ trash icon
- **Sort**: Click sort button to toggle A-Z / Z-A
- **View Mode**: Toggle between grid 📇 and list 📋 layouts

### Theme Toggle

- Click moon/sun icon in sidebar
- Theme persists across sessions

---

## 🧪 Demo Data

The app includes 6 realistic demo contacts on first load:

- **Test User** - Clearly marked demo accounts
- **Sample Contact** - Realistic but identifiable as dummy data
- Multiple international contacts with proper country codes
- Variety of email domains and phone formats

All data is stored in `localStorage` and persists across sessions.

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome/Edge | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder via Netlify UI or CLI
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from 'dist' folder
```

---

## 🔑 Key Learnings & Best Practices

This project demonstrates:

- ✅ **Modern React patterns** (Hooks, Context, Functional Components)
- ✅ **State management** without heavy libraries
- ✅ **Performance optimization** techniques
- ✅ **Accessibility** considerations
- ✅ **Clean code architecture** with separation of concerns
- ✅ **Reusable components** and custom hooks
- ✅ **Responsive design** principles
- ✅ **Animation** implementation for enhanced UX
- ✅ **Form handling** with validation
- ✅ **LocalStorage** data persistence

---

## 📝 Development Notes

### Component Responsibilities

- **App.jsx**: Orchestration, keyboard shortcuts, loading state
- **ContactsContext**: Global state, reducer logic, localStorage sync
- **ThemeContext**: Theme state, system detection, persistence
- **Header**: Search, sort, view mode, add contact trigger
- **Sidebar**: Navigation, theme toggle, settings
- **ContactList**: Filtering, sorting, rendering logic
- **ContactCard**: Individual contact display (grid/list variants)
- **AddContactModal**: Form, validation, country selector
- **CountrySelector**: Searchable modal with 150+ countries

### Design Decisions

- **No routing library**: SPA with view-based navigation (simpler for contact management)
- **Context over Redux**: Lighter weight for this scale of application
- **Tailwind over CSS-in-JS**: Better performance, smaller bundle
- **localStorage over backend**: Demo app, easily adaptable to API
- **React Hook Form**: Best form performance and DX

---

## 🤝 Contributing

While this is a portfolio project, suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design inspiration**: [Linear](https://linear.app) - For the clean, minimal aesthetic
- **Icons**: [Lucide](https://lucide.dev) - Beautiful, consistent icon set
- **Avatars**: [DiceBear](https://dicebear.com) - Dynamic SVG avatar generation
- **Color palette**: Tailwind CSS neutral palette
- **Typography**: System font stack for optimal performance

---

## 📞 Contact

**GitHub**: [@keshavpj1711](https://github.com/keshavpj1711)

**Project Link**: [https://github.com/keshavpj1711/contact_list_spa_tria](https://github.com/keshavpj1711/contact_list_spa_tria)

---

<div align="center">

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

*Crafted to demonstrate modern frontend development practices*

</div>