# Tria Contact Dashboard

A modern, Linear-inspired contact management application built with React and Tailwind CSS.

![Tria Contact Dashboard](https://img.shields.io/badge/React-18.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

## Features

- **Modern UI**: Linear-style dark theme with smooth animations
- **Search Contacts**: Real-time debounced search across name, email, and phone
- **Add Contacts**: Modal form with validation using React Hook Form
- **Favorites**: Star contacts to mark them as favorites
- **Persistent Storage**: All data saved to localStorage
- **Keyboard Shortcuts**:
  - `/` - Focus search bar
  - `n` - Open Add Contact modal
  - `Esc` - Close modal
- **Responsive Design**: Works perfectly on desktop and mobile
- **Loading States**: Skeleton loaders for better UX
- **Toast Notifications**: Feedback for all actions

## Tech Stack

- **React 18.3** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form validation
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons
- **Context API + useReducer** - State management
- **localStorage** - Data persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/keshavpj1711/contact_list_spa_tria.git
   cd contact_list_spa_tria
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx           # Navigation sidebar
│   ├── Header.jsx            # Search bar and Add button
│   ├── ContactList.jsx       # Contact grid display
│   ├── ContactCard.jsx       # Individual contact card
│   ├── AddContactModal.jsx   # Add contact form modal
│   ├── Loader.jsx            # Loading skeleton
│   └── EmptyState.jsx        # No contacts placeholder
├── context/
│   └── ContactsContext.jsx   # Global state management
├── hooks/
│   └── useDebounce.js        # Search debounce hook
├── utils/
│   ├── fakeApi.js            # Simulated async API
│   ├── localStorage.js       # Storage helpers
│   └── seedContacts.js       # Demo data seeder
├── App.jsx                   # Main app component
├── main.jsx                  # React entry point
└── index.css                 # Global styles + Tailwind
```

## Usage

### Adding a Contact

1. Click "Add Contact" button in the header (or press `n`)
2. Fill in the contact details:
   - Name (required, min 2 characters)
   - Email (required, valid email format)
   - Phone (required, valid phone format)
3. Click "Add Contact" to save

### Searching Contacts

- Use the search bar in the header (or press `/` to focus)
- Search is debounced (300ms) for better performance
- Searches across name, email, and phone fields

### Marking Favorites

- Click the star icon on any contact card
- View favorites by clicking "Favorites" in the sidebar

### Deleting Contacts

- Hover over a contact card
- Click the trash icon that appears

## Data Persistence

All contacts are automatically saved to `localStorage`. The app includes demo contacts on first load:

- Alice Johnson
- Rahul Mehta
- Maria Lopez
- Chen Wei
- Emma Williams
- Mohammed Al-Rashid

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search bar |
| `n` | Open Add Contact modal |
| `Esc` | Close modal |

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Acknowledgments

- Design inspired by [Linear](https://linear.app)
- Icons by [Lucide](https://lucide.dev)
- Avatars by [DiceBear](https://dicebear.com)

---

Built with Claude Code