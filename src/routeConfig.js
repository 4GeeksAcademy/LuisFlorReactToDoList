import { ContactList } from "./pages/ContactList";
import { AddContact } from "./pages/AddContact";

export const routeConfig = [
  {
    name: "contactList",
    path: "/",
    page: <ContactList />,
  },
  {
    name: "addContact",
    path: "/",
    page: <AddContact />,
  },
];
