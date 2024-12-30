import { createContext, useState } from "react";

export const FavouritesContext = createContext(null);

export const FavouritesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const deleteFavs = (uid, type) => {
    setFavs(
      favs.filter((fav) => {
        return !(fav.uid === uid && fav.type === type);
      }),
    );
  };

  const isFav = (uid, type) => {
    return favs.some((favs) => favs.uid === uid && favs.type === type);
  };

  const addFavs = (uid, type, name) => {
    setFavs([
      ...favs,
      {
        uid: uid,
        type: type,
        name: name,
      },
    ]);
  };
  return (
    <FavouritesContext.Provider
      value={{ favs, setFavs, addFavs, deleteFavs, isFav }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
