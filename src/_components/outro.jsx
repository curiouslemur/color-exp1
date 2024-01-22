import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import * as oc from '../_controllers/outroController'

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Outro = (props) => {
    const labels = props.expPages.OutroLabels
    oc.isProlificUser()
    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Typography variant="h4">{labels.outroTitle}</Typography>
            {oc.isProlificUser ? labels.prolificUser1 : labels.closeBrowser}
            {oc.isProlificUser ? <Button href="www.youtube.com">{labels.prolificUserButton}</Button> : <></>}
        </Grid>
    )
}

export default Outro;