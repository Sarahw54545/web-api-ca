import React, { useState, useEffect } from "react";
import { getFavorites as fetchFavoritesAPI, addToFavorites as addToFavoritesAPI, deleteFromFavorites as deleteFromFavoritesAPI, getWatchlist as fetchWatchlistAPI, addToWatchlist as addToWatchlistAPI, deleteFromWatchlist as deleteFromWatchlistAPI } from "../api/user-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])
  const [myReviews, setMyReviews] = useState({})
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const favs = await fetchFavoritesAPI();
      const watch = await fetchWatchlistAPI();
      setFavorites(favs.favorites || []);
      setWatchlist(watch.watchlist || []);
    } catch (err) {
      console.error("Failed to Fetch User Data", err);
    }
  };

  fetchData();
}, []);

  const addToFavorites = async (movie) => {
    if (!favorites.includes(movie.id)) {
      try {
        await addToFavoritesAPI({ movieId: movie.id });
        setFavorites((prev) => [...prev, movie.id]);
      } catch (err) {
        console.error("Error adding to favorites", err);
      }
    }
  };

  const removeFromFavorites = async (movie) => {
    try {
      await deleteFromFavoritesAPI(movie.id);
      setFavorites((prev) => prev.filter((mId) => mId !== movie.id));
    } catch (err) {
      console.error("Error Removing from Favorites", err);
    }
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };

  const addToWatchlist = async (movie) => {
    if (!watchlist.includes(movie.id)) {
      try {
        await addToWatchlistAPI({ movieId: movie.id });
        setWatchlist((prev) => [...prev, movie.id]);
      } catch (err) {
        console.error("Error Adding to Watchlist", err);
      }
    }
  };

  const removeFromWatchlist = async (movie) => {
    try {
      await deleteFromWatchlistAPI(movie.id);
      setWatchlist((prev) => prev.filter((mId) => mId !== movie.id));
    } catch (err) {
      console.error("Error Removing from Watchlist", err);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchlist,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;