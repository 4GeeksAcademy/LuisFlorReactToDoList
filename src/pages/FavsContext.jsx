import { createContext, useEffect, useState } from "react";
import { deleteUserFavs, postUserFavs, getUserFavs } from "../api/users";

export const FavouritesContext = createContext({
  setFavs: () => {},
  deleteFavs: (id) => {},
  addFavs: (id, name, type) => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const userId = 1;

  const deleteFavs = (externalId, type) => {
    const favId = favs.find((fav) => {
      return !(fav.external_id === externalId && fav.type === type);
    }).id;
    deleteUserFavs(userId, favId).then(() => {
      refreshFavs();
    });
  };

  const isFav = (id, type) => {
    return favs.some((favs) => favs.id === id && favs.type === type);
  };

  const addFavs = (externalId, name, type) => {
    postUserFavs(userId, externalId, type, name).then(() => {
      refreshFavs();
    });
  };

  const refreshFavs = () => {
    getUserFavs(userId).then((data) => {
      setFavs(data);
    });
  };

  useEffect(() => {
    refreshFavs();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{ favs, setFavs, addFavs, deleteFavs, isFav }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
