import React from "react";
import { Link } from "react-router";
import { getCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import placeholder from '../../images/actorPlaceholder.png'

export default function MovieCreditList({ movie }) {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['credits', { movie_id: movie.id }],
    queryFn: getCredits,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const cast = data.cast;
  // console.log(cast)

  let castCards = cast.map((c) => (
    <ImageListItem key={c.cast_id}>
      <Link style={{textDecoration: "none", color: "black"}} to={`/people/${c.id}`}>
        <img
          style={{ objectFit: "cover", width: 200 }}
          src={
            c.profile_path
              ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
              : placeholder
          }
          alt={c.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={c.name}
          subtitle={<span>{c.character}</span>}
          position="below"
        />
      </Link>
    </ImageListItem>
  ));

  return (
    <ImageList cols={cast.length} gap={10} sx={{ width: "100%" }}>
      {castCards}
    </ImageList>
  );
};