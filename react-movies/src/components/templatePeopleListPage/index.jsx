import React, { useState } from "react";
import HeroBanner from "../peopleHeroBanner";
import Grid from "@mui/material/Grid2";
import Person from "../personCard"

function PeopleListPageTemplate({ title, searchPrompt, people }) {
    const [nameFilter, setNameFilter] = useState("");

    let displayedPeople = people

        .filter((p) => {
            return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })

    const handleChange = (type, value) => {
        (type === "name") 
        setNameFilter(value);
    };

    let peopleCards = displayedPeople.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }} sx={{ padding: "20px" }}>
            <Person key={p.id} person={p} />
        </Grid>
    ));

    return (
        <Grid container>
            <Grid size={12}>
                <HeroBanner
                    title={title}
                    searchPrompt={searchPrompt}
                    onUserInput={handleChange}
                    titleFilter={nameFilter}
                />
            </Grid>
            {peopleCards}
        </Grid >
    );
}
export default PeopleListPageTemplate;