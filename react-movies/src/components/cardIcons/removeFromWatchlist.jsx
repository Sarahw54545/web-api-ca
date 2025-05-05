import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
    context.removeFromWatchlist(movie);
  };
  
  return (
    <IconButton sx={{marginRight: 1}}
      aria-label="remove from watchlist"
      onClick={handleRemoveFromWatchlist}
    >
      <PlaylistRemoveIcon color="error" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchlistIcon;