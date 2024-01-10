import React, { useEffect } from "react";
import { Autocomplete, Button, Grid, FormControl, InputLabel, TextField, Typography } from "@mui/material"

// import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"

import '../App.css'

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }
    , label: { margin: 0 }
}

export const Consent = (props) => {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);

    useEffect(() => { document.body.classList.add('consent-body'); }, []);

    const labels = props.expPages.ConsentLabels

    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xl={6} xs={10}>

                <Typography variant="h4">{labels.consentTitle}</Typography>

                <Grid item >
                    <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} />
                    <props.expPages.Consent keywordColor="#3e3a53" /> <br />
                </Grid>

                <Grid item id="consent-questionnaire" xs={12}>
                    <FormControl id="country-select-form" style={{ minWidth: "80%", maxWidth: 200, marginRight: 20 }}>
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
                <br />
                <Button onClick={(nav, nu) => cc.onClickStart(props.navigate, props.nextUrl)}> Start </Button>
            </Grid>

        </Grid>
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


export default Consent