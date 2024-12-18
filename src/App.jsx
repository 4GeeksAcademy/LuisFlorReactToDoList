import { NavigateBar } from "./components/Navbar";
import { Characters } from "./pages/Characters";
import { Route, Routes } from "react-router";
import { Films } from "./pages/Films";
import { Planets } from "./pages/Planets";

export const App = () => {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </>
  );
};
