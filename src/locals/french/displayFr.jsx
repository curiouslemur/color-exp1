import React from "react";
import { Grid, Typography } from "@mui/material";

export const DisplayFr = (props) => {
    return (
        <Grid container alignContent='justify'
            marginTop={'2%'}
        // direction="column"
        // justifyContent="flex-start"
        // alignItems="center"
        >

            <Typography>Please <b>adjust the brightness </b> of your display until you can clearly see the differences between all 11 steps of the greyscale test image below.</Typography>

            <Typography ><b>Disable Night shift mode </b> or blue light filters if applicable.</Typography>

        </Grid >
    )
}

export const DisplayLabelsFr = {
    confirm: 'Confirm how many steps you can see: '
}

export default DisplayFr;