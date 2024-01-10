import React, { useEffect } from "react";
import { Autocomplete, Button, Grid, FormControl, InputLabel, TextField } from "@mui/material";

import * as dc from "../_controllers/displayController"

export const Display = (props) => {
    useEffect(() => {
        document.body.classList.remove('consent-body');
        document.body.classList.add('display-body');
    }, []);

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);

    const labels = { lab: "hi" }
    return (
        <>
            This is the main Display Page
            <Button onClick={(nav, nu) => dc.onClickNext(props.navigate, props.nextUrl)}> Next </Button>

            <Grid item id="consent-questionnaire" xs={12}>
                <FormControl id="country-select-form" required style={{ minWidth: "80%", maxWidth: 800, marginRight: 20 }}>
                    <InputLabel id="demo-simple-select-label">{labels.country}</InputLabel>
                    <Autocomplete
                        {...defaultProps}
                        id="controlled-demo"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="controlled" variant="standard" />
                        )}
                    />
                </FormControl>
            </Grid>
        </>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }]

export default Display;