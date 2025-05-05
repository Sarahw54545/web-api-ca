import React, { useState } from "react";
import HeroBanner from "../heroBanner";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import EmptyPrompt from "../emptyPrompt"


function MovieListPageTemplate({ movies, title, action, searchPrompt, isEmpty, emptyPrompt, buttonPrompt, link}) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies

    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
      <Grid container>
        <Grid size={12}>
          <HeroBanner
            title={title}
            searchPrompt={searchPrompt}
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter} />
        </Grid>

        {isEmpty === true
          ? <EmptyPrompt emptyPrompt={emptyPrompt} buttonPrompt={buttonPrompt} link={link}></EmptyPrompt>
          : <MovieList action={action} movies={displayedMovies}></MovieList>
        }
      </Grid >
  );
}
export default MovieListPageTemplate;