import React, { useEffect } from "react";
import { Button, Grid, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"

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

    useEffect(() => {
        // add class to body element
        document.body.classList.add('consent-body');
    }, []);

    const labels = props.expPages.ConsentLabels

    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xl={6} xs={10}>
                <Typography variant="h4">{labels.consentTitle}</Typography>
                <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} />

                <props.expPages.Consent keywordColor="#3e3a53" /> <br />

                <Grid item id="consent-questionnaire" xs={12}>
                    <FormControl id="country-select-form" required style={{ maxWidth: 200, marginRight: 20 }}>
                        <InputLabel id="demo-simple-select-label">aaadfdsfkdsjhfkdsjhfdskjfhdksjhf</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={1}
                            label="Age"
                        // onChange={}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <br />
                <Button onClick={(nav, nu) => cc.onClickStart(props.navigate, props.nextUrl)}> Start </Button>
            </Grid>

        </Grid>
    )
}

export default Consent