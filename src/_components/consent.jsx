import React, { useContext, useEffect } from "react";
import { Button, Grid } from "@mui/material"

import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"

import '../App.css'

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap' },
    root: { flexGrow: 1, padding: '1%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }
    , label: { margin: 0 }
}

export const Consent = (props) => {

    useEffect(() => {
        // add class to body element
        document.body.classList.add('consent-body');
    }, []);

    const { expLang } = useContext(StudyContext) // only here temp for testing context passing. Works!
    const labels = props.expPages.ConsentLabels

    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xl={6} xs={10}>
                <h2>{labels.consentTitle}</h2>
                This is the main consent. And again, Language is <b>{expLang}</b>
                <br />
                <Button onClick={(nav, nu) => cc.onClickStart(props.navigate, props.nextUrl)}> Start </Button>
            </Grid>

        </Grid>
    )
}

export default Consent