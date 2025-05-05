import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid2";
import Avatar from '@mui/material/Avatar';
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";
import { MoviesContext } from "../../contexts/moviesContext";

export default function MovieCard({ movie, action }) {
  const { favorites, watchlist} = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (watchlist.find((id) => id === movie.id)) {
    movie.watchlist = true;
  } else {
    movie.watchlist = false
  }

  return (
    <Card sx={{ borderRadius: 5 }}>

      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
        alt={`Cover Poster for ${movie.title}`}
      />

      <CardHeader sx={{ paddingBottom: 0 }}
        avatar={
          movie.favorite
            ? (
              <Avatar sx={{ backgroundColor: 'red' }}>
                <FavoriteIcon />
              </Avatar>
            )
            : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}
          </Typography>
        }
      />

      <CardContent sx={{ paddingTop: 0.5 }}>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h7" component="p">
              <CalendarIcon fontSize="small" sx={{ marginRight: 2 }} />
              {movie.release_date}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h7" component="p">
              <StarRateIcon fontSize="small" sx={{ marginRight: 2 }} />
              {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing sx={{ paddingTop: 0 }}>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}