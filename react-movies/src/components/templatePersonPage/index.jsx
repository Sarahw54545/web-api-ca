import React from "react";
import { Link } from "react-router";
import Header from "../headerPerson"
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/actorPlaceholder.png'
import Button from "@mui/material/Button";
import PersonCreditList from "../personsCreditList"

const TemplatePersonPage = ({ person }) => {

    person.gender == 0
        ? person.gender = "Not Set / Not Specified"
        : person.gender == 1
            ? person.gender = "Female"
            : person.gender == 2
                ? person.gender = "Male"
                : person.gender == 3
                    ? person.gender = "Non Binary"
                    : null

    const imdbCheck = person.imdb_id
        ? <Grid size={{ xs: 12 }}>
            <Typography variant="h7" component="h4" sx={{ marginBottom: 1 }}>
                IMDB Link
            </Typography>
            <Link to={`https://www.imdb.com/name/${person.imdb_id}`}>
                <Button variant="contained" size="medium" color="primary">
                    IMDB Website
                </Button>
            </Link>
        </Grid>
        : null

    return (
        <>
            <Header person={person}></Header>
            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid size={{ xs: 3 }}>
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
                                <Typography variant="h6" component="h3">
                                    Personal Info
                                </Typography>
                            }
                        />

                        <CardContent sx={{ paddingTop: 0.5 }}>
                            <Grid container>

                                <Grid size={{ xs: 12 }} sx={{ marginBottom: 1 }}>
                                    <Typography variant="h7" component="h4">
                                        Gender
                                    </Typography>
                                    <Typography variant="h7" component="p">
                                        {person.gender}
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12 }} sx={{ marginBottom: 1 }}>
                                    <Typography variant="h7" component="h4">
                                        Birthday
                                    </Typography>
                                    <Typography variant="h7" component="p">
                                        {person.birthday}
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12 }} sx={{ marginBottom: 1 }}>
                                    <Typography variant="h7" component="h4">
                                        Known For
                                    </Typography>
                                    <Typography variant="h7" component="p">
                                        {person.known_for_department}
                                    </Typography>
                                </Grid>

                                {/* If Have an IMDB Page IMDB Section Shows */}
                                {imdbCheck}

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 9 }}>
                    <Container>
                        <Typography variant="h3" component="h2" sx={{ marginBottom: 3 }}>
                            {person.name}
                        </Typography>

                        <Typography variant="h5" component="h3" sx={{ marginBottom: 2 }}>
                            <b>Biography</b>
                        </Typography>

                        <Typography variant="h7" component="p" sx={{ marginBottom: 3 }}>
                            {person.biography}
                        </Typography>

                        <Typography variant="h5" component="h3">
                            <b>Movie Roles</b>
                        </Typography>

                        <PersonCreditList person={person}></PersonCreditList>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default TemplatePersonPage;