import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from '@mui/icons-material/PlaylistAdd';

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;