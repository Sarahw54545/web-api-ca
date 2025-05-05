import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery} from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

const HomePage = () => {

  const [currentPage, setPage] = useState(1);
  const handleNavChange = (event, value) => {
    setPage(value);
  };

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['home', currentPage],
    queryFn: () => getMovies(currentPage),
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

  const title = (
    <>
      Web App Development 2 <br /> Movies App
    </>
  );

  return (
    <>
    <PageTemplate
      title={title}
      searchPrompt="Movies..."
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    <Container sx={{paddingBottom: 3, paddingTop: 1, justifyItems: "center"}}>
    <Pagination count={totalPages} color="primary" size="large" page={currentPage} onChange={handleNavChange} />
    </Container>
    </>
  );
};
export default HomePage;