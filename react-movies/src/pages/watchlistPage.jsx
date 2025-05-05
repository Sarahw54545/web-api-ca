import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";

const WatchlistsPage = () => {
  const { watchlist: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchlistMovieQueries = useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });

  // Check if any of the parallel queries is still loading.
  const isPending = watchlistMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = watchlistMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const isEmpty = movieIds.length == 0
    ? true
    : false


  return (
    <PageTemplate
      title="Movies Added to Watchlist"
      searchPrompt="Watchlist Movies..."
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchlist movie={movie} />
          </>
        );
      }}
      isEmpty={isEmpty}
      emptyPrompt="Currently No Movies on Watchlist..."
      buttonPrompt="Add Some Movies From Here"
      link="/movies/upcoming"
    />
  );
};

export default WatchlistsPage;