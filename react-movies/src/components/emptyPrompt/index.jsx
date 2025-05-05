import React from 'react'
import Container from "@mui/material/Container";
import { Link } from "react-router";
import Button from "@mui/material/Button";

const EmptyPrompt = ({ emptyPrompt, buttonPrompt, link }) => {

    return (
        <Container sx={{ textAlign: "center" }}>
            <h2>{emptyPrompt}</h2>
            <Link to={`${link}`}>
                <Button variant="contained" size="medium" color="primary">
                    {buttonPrompt}
                </Button>
            </Link>
        </Container>
    );
};

export default EmptyPrompt