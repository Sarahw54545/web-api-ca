import React, {useState} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist';
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

const UpcomingMoviesPage = () => {

    const [currentPage, setPage] = useState(1);
    const handleNavChange = (event, value) => {
      setPage(value);
    };

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['discoverUpcomingMovies', currentPage],
    queryFn: () => getUpcomingMovies(currentPage),
    enabled: !!currentPage
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  let totalPages = data.total_pages

  totalPages>500
  ? totalPages=500
  : null

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
      searchPrompt="Upcoming Movies..."
      movies={movies}
      action={(movie) => {
        return (
          <>
            {
            movie.watchlist == true
            ? (
            <RemoveFromWatchlist movie={movie} />
            )
            : <PlaylistAddIcon movie={movie} />
            }
          </>
        );
      }}
    />
    <Container sx={{paddingBottom: 3, paddingTop: 1, justifyItems: "center"}}>
    <Pagination count={totalPages} color="primary" size="large" page={currentPage} onChange={handleNavChange} />
    </Container>
    </>
  );
};
export default UpcomingMoviesPage;