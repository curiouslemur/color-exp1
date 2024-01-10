import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material"

// import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"
import { loadCountries_inLang } from "../_utils/content-loader";

import '../App.css'

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }
    , label: { margin: 0 }
}

// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     { title: 'The Godfather: Part II', year: 1974 },
//     { title: 'The Dark Knight', year: 2008 },
//     { title: '12 Angry Men', year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: 'Pulp Fiction', year: 1994 }]

export const Consent = (props) => {
    const [countryRes, setCountryRes] = useState("")
    const [countryResLongest, setCountryResLongest] = useState("")

    useEffect(() => { document.body.classList.add('consent-body'); }, []);

    const labels = props.expPages.ConsentLabels
    const countryNames = loadCountries_inLang(props.expLang)

    return (
        <Grid container style={styles.container} justifyContent="center">
            <Grid item xl={6} xs={10}>

                <Typography variant="h4">{labels.consentTitle}</Typography>

                <Grid item >
                    <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} />
                    <props.expPages.Consent keywordColor="#3e3a53" /> <br />
                </Grid>
                <br />
                <Stack spacing={3} id="consent-questionnaire" >
                    <Grid item>
                        <InputLabel>{labels.countryResQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '75%' }}
                            id="country-residence-select"
                            // value={countryRes}
                            options={countryNames}
                            getOptionLabel={(option) => option.name || ""}
                            onChange={(newVal) => { setCountryRes(newVal.name) }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    // label={labels.countryResLabel}
                                    placeholder={labels.countryResLabel}
                                />
                            )}
                        />
                    </Grid>
                    <Grid>
                        <InputLabel>{labels.countryResLongestQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '75%' }}
                            id="country-residence-longuest"
                            options={countryNames}
                            getOptionLabel={(option) => option.name}
                            // defaultValue={}
                            onChange={(newVal) => { setCountryResLongest(newVal.name) }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder={labels.countryResLongestLabel}
                                />
                            )}
                        />
                    </Grid>
                </Stack>

                <br />
                <Button onClick={(nav, nu) => {
                    cc.onClickStart(props.navigate, props.nextUrl)
                }}> Start </Button>
            </Grid>

        </Grid>
    )
}



export default Consent