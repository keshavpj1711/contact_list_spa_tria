export const seedContacts = () => {
  const existing = localStorage.getItem("contacts");
  if (!existing) {
    const demoContacts = [
      {
        id: "1",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "+1 555 238 8821",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Alice",
        favorite: true,
      },
      {
        id: "2",
        name: "Rahul Mehta",
        email: "rahul.mehta@example.com",
        phone: "+91 98972 33822",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rahul",
        favorite: false,
      },
      {
        id: "3",
        name: "Maria Lopez",
        email: "maria.lopez@example.com",
        phone: "+34 678 332 110",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Maria",
        favorite: false,
      },
      {
        id: "4",
        name: "Chen Wei",
        email: "chen.wei@example.com",
        phone: "+86 138 0013 8000",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Chen",
        favorite: true,
      },
      {
        id: "5",
        name: "Emma Williams",
        email: "emma.williams@example.com",
        phone: "+44 20 7946 0958",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Emma",
        favorite: false,
      },
      {
        id: "6",
        name: "Mohammed Al-Rashid",
        email: "mohammed.alrashid@example.com",
        phone: "+971 4 123 4567",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Mohammed",
        favorite: false,
      },
    ];
    localStorage.setItem("contacts", JSON.stringify(demoContacts));
  }
};