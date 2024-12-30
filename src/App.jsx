import { NavigateBar } from "./components/Navbar";
import { Characters } from "./pages/Characters";
import { Route, Routes } from "react-router";
import { Films } from "./pages/Films";
import { Planets } from "./pages/Planets";
import { PlanetDetails } from "./pages/PlanetDetails";
import { CharacterDetails } from "./pages/CharacterDetails";
import { FilmDetails } from "./pages/FilmDetails";

export const App = () => {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/films/:uid" element={<FilmDetails />} />
        <Route path="/people" element={<Characters />} />
        <Route path="/people/:uid" element={<CharacterDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:uid" element={<PlanetDetails />} />
      </Routes>
    </>
  );
};
