import { NavigateBar } from "./components/Navbar";
import AddContact from "./pages/AddContact";
import { Agendas } from "./pages/Agendas";
import { ContactList } from "./pages/ContactList";
import { EditContact } from "./pages/EditContact";

import { Routes, Route } from "react-router";

export const App = () => {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<Agendas />} />
        <Route path="/agendas/:slug/contacts" element={<ContactList />} />
        <Route path="/agendas/:slug/addcontact" element={<AddContact />} />
        <Route
          path="/agendas/:slug/editcontact/:id"
          element={<EditContact />}
        />
      </Routes>
    </>
  );
};
