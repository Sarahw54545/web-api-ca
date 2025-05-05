import React, { useState } from "react";
import { getPopPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

const PopPeoplePage = () => {

  const [currentPage, setPage] = useState(1);
  const handleNavChange = (event, value) => {
    setPage(value);
  };

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['popPeople', currentPage],
    queryFn: () => getPopPeople(currentPage),
    enabled: !!currentPage
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const people = data.results;

  let totalPages = data.total_pages

  totalPages>500
  ? totalPages=500
  : null

  return (
    <>
    <PageTemplate
      title="Popular Actors"
      searchPrompt="Actors"
      people={people}
    />
    <Container sx={{paddingBottom: 3, paddingTop: 1, justifyItems: "center"}}>
    <Pagination count={totalPages} color="primary" size="large" page={currentPage} onChange={handleNavChange} />
    </Container>
    </>
  );
};
export default PopPeoplePage;