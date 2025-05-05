import React from "react";
import Container from '@mui/material/Container';
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const formControl =
{
    margin: 1,
    backgroundColor: "rgb(255, 255, 255)"
};

export default function heroBanner(props) {

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e) => {
        handleChange(e, "name", e.target.value);
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

                <Typography variant="h4" component="h1" sx={{ color: "white", textShadow: "2px 4px 4px rgb(46 91 173 / 0.6)", margin: 2, fontWeight: "bold" }}>
                {props.title}
                </Typography>
                
                <Container sx={{
                    paddingBottom: 3,
                }}>
                    <TextField
                        sx={{
                            ...formControl,
                            minWidth: "100%",
                            borderRadius: 10
                        }}
                        id="filled-search"
                        label={`Search ${props.searchPrompt}`}
                        type="search"
                        variant="filled"
                        value={props.titleFilter}
                        onChange={handleTextChange}
                    />
                </Container>
            </Container>
        </>
    );
};