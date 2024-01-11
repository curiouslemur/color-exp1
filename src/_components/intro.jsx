import React, { useEffect } from "react";
import { Box, Button, Grid } from "@mui/material"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Intro = (props) => {
    useEffect(() => {
        document.body.classList.remove('display-body');
        document.body.classList.add('intro-body');
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <Grid container style={styles.container} justifyContent="center">
            <Grid item >
                {/* <hr style={{ color: "#ea3433", backgroundColor: "#ea3433", height: 1.5 }} /> */}
                <props.expPages.Intro />
            </Grid>
            <Grid container justifyContent="center">

            </Grid>
            <Button variant='outlined' color='secondary' onClick={(nav, nu) => ic.onClickStart(props.navigate, props.nextUrl)}> Next </Button>
        </Grid>
    )

}

export default Intro;