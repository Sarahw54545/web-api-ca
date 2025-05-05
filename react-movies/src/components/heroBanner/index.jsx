import React, { useState } from "react";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../spinner';
import Container from '@mui/material/Container';
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const formControl =
{
    margin: 1,
    backgroundColor: "rgb(255, 255, 255)"
};

export default function heroBanner(props) {

    const { data, error, isPending, isError } = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
    });

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    return (
        <>
            <Container sx={
                {
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "lightBlue",
                    paddingTop: 1,
                    paddingBottom: 1,
                    marginBottom: 2,
                    textAlign: "center",
                    minWidth: "100%",
                }
            }>

                <Typography variant="h4" component="h1" sx={{ color: "white", textShadow: "2px 4px 4px rgb(46 91 173 / 0.6)", margin: 2, fontWeight: "bold" }}>{props.title}</Typography>
                <Container sx={{
                    paddingBottom: 3,
                }}>
                    <TextField
                        sx={{
                            ...formControl,
                            minWidth: "50%",
                            borderRadius: 10
                        }}
                        id="filled-search"
                        label={`Search ${props.searchPrompt}`}
                        type="search"
                        variant="filled"
                        value={props.titleFilter}
                        onChange={handleTextChange}
                    />

                    <FormControl sx={{
                        minWidth: "25%"
                    }}>
                        <InputLabel id="genre-label" sx={{ color: "white", paddingLeft: 4 }}>Filter By Genre</InputLabel>
                        <Select
                            sx={{ ...formControl, borderRadius: 10 }}
                            labelId="genre-label"
                            id="genre-select"
                            defaultValue=""
                            value={props.genreFilter}
                            onChange={handleGenreChange}
                        >

                            {genres.map((genre) => {
                                return (
                                    <MenuItem key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Container>
            </Container>
        </>
    );
};