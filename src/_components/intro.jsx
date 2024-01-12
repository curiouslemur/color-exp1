import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material"

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
    console.log(labels)
    return (
        <Grid container style={styles.container} justifyContent="center">

            <Grid item xl={6} xs={9}>
                <Typography variant="h4">{labels.introTitle}</Typography>

                <hr style={{ color: "#ffffff00", backgroundColor: "#ffffff00", height: 1.5 }} />

                <Grid item >
                    <props.expPages.Intro />
                </Grid>


                <Button variant='outlined' color='secondary' style={{ marginTop: '5ch' }}
                    onClick={(nav, nu) => {
                        ic.onClickStart(props.navigate, props.nextUrl)
                    }}> Next </Button>
            </Grid>
        </Grid>
    )

}

export default Intro;