import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";;
import img from '../../images/actorPlaceholder.png'
import { Link } from "react-router";

export default function MovieCard({ person }) {

    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardMedia
                component="img"
                sx={{ objectFit: "contain" }}
                image={
                    person.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                        : img
                }
                alt={`Profile Image for ${person.name}`}
            />

            <CardHeader sx={{ paddingBottom: 0 }}
                title={
                    <Typography variant="h5" component="p">
                        {person.name}
                    </Typography>
                }
            />

            <CardContent sx={{ paddingTop: 0.5 }}>
                <Grid container>
                    <Link to={`/people/${person.id}`}>
                        <Button variant="contained" size="medium" color="primary">
                            More Info...
                        </Button>
                    </Link>
                </Grid>
            </CardContent>
        </Card>
    );
}