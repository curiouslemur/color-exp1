import React, { useEffect } from "react";
import { Autocomplete, Box, Button, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material"

// import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"
import { loadCountries_inLang, loadLanguages_inLang } from "../_utils/content-loader";

import '../App.css'

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }
    , label: { margin: 0 }
}

export const Consent = (props) => {
    const [disabledButton, setDisabledButton] = React.useState(false);
    // const [countryRes, setCountryRes] = useState("")
    // const [countryResLen, setCountryResLen] = useState("")
    // const [countryResLongest, setCountryResLongest] = useState("")

    useEffect(() => { document.body.classList.add('consent-body'); }, []);

    const labels = props.expPages.ConsentLabels
    const countryNames = loadCountries_inLang(props.expLang)
    const languageNames = loadLanguages_inLang(props.expLang)

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
                    <Box id="country-res-select" >
                        <InputLabel>{labels.countryResQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '30ch' }}
                            // value={countryRes}
                            options={countryNames}
                            getOptionLabel={(option) => option.name || ""}
                            onChange={(e, val, key, scs) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "countryRes", setDisabledButton) }
                                else { cc.onChangeField({ name: "" }, "countryRes", setDisabledButton) }
                            }}
                            // onChange={(e, newVal) => { console.log(countryRes); setCountryRes(newVal.name) }}
                            renderInput={(params) => (
                                <TextField  {...params} variant="standard"
                                    // label={labels.countryResLabel}
                                    placeholder={labels.countryResLabel} />)}
                        />
                    </Box>
                    <Box id="country-res-duration-field">
                        <InputLabel>{labels.countryResLenQ}</InputLabel>
                        <TextField required
                            variant="standard" placeholder=""
                            onChange={(e) => cc.onChangeField(e.target.value, "countryResLen", setDisabledButton)}
                        />
                    </Box>
                    <Box id="country-res-longest-select">
                        <InputLabel>{labels.countryResLongestQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '30ch' }}
                            options={countryNames}
                            getOptionLabel={(option) => option.name}
                            onChange={(e, val, key) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "countryResLongest", setDisabledButton) }
                                else { cc.onChangeField({ alpha3: "" }.alpha3, "countryResLongest", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.countryResLongestLabel} />)}
                        />
                    </Box>
                    <Box id="lang-native-select">
                        <InputLabel>{labels.langNativeQ}</InputLabel>
                        <Autocomplete style={{ maxWidth: '30ch' }}
                            options={languageNames}
                            getOptionLabel={(option) => option.lang}
                            onChange={(e, val, key) => {
                                if (val !== null) { cc.onChangeField(val.alpha3, "langNative", setDisabledButton) }
                                else { cc.onChangeField({ alpha3: "" }.alpha3, "langNative", setDisabledButton) }
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"
                                    placeholder={labels.langNativeLabel} />)}
                        />
                    </Box>
                </Stack>
                <Button style={{ marginTop: '10px' }}
                    variant="contained"
                    disabled={disabledButton}
                    onClick={(nav, nu) => {
                        cc.onClickStart(props.navigate, props.nextUrl)
                    }}> {labels.sign} </Button>
            </Grid>

        </Grid>
    )
}



export default Consent