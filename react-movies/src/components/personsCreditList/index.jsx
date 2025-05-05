import React from "react";
import { Link } from "react-router";
import { getPersonsCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import placeholder from '../../images/film-poster-placeholder.png'

export default function MovieCreditList({ person }) {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['credits', { person_id: person.id }],
    queryFn: getPersonsCredits,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.cast;

  let movieCards = movies.map((m) => (
    <ImageListItem key={m.id}>
      <Link style={{textDecoration: "none", color: "black"}} to={`/movies/${m.id}`}>
        <img
          style={{ objectFit: "cover", width: 200 }}
          src={
            m.poster_path
              ? `https://image.tmdb.org/t/p/w500/${m.poster_path}`
              : placeholder
          }
          alt={m.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={m.title}
          subtitle={<span>{m.character}</span>}
          position="below"
        />
      </Link>
    </ImageListItem>
  ));

  return (
    <ImageList cols={movies.length} gap={10} sx={{ width: "100%" }}>
      {movieCards}
    </ImageList>
  );
};