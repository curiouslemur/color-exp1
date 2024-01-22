import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import * as oc from '../_controllers/outroController'

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Outro = (props) => {
    const labels = props.expPages.OutroLabels

    console.log(oc.isProlificUser())
    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography variant="h5">{labels.outroTitle}</Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography> {oc.isProlificUser === true ? labels.prolificUser1 : labels.closeBrowser} </Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                {oc.isProlificUser ? <Button target="_blank" href="https://www.youtube.com">{labels.prolificUserButton}</Button> : <></>}
            </Grid>
        </Grid >
    )
}

export default Outro;