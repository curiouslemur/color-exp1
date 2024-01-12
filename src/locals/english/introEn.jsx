import React from "react";
import { Grid, Typography } from "@mui/material";

export const IntroEn = (props) => {
    return (
        <Grid container alignContent='justify'>

            <Typography paragraph>During this experiment you’ll be presented with each of the colored squares from the set below, one at a time.
            </Typography>
            <Grid id="grid-color-patches"></Grid>
            <Typography>
                You will be asked to rate <b>how much you associate each color with each of the following <i>concepts</i></b>:</Typography>
            <Grid container justifyContent="center">
                <i style={{ marginTop: 0 }} justifyContent='center'>
                    {IntroLabelsEn.cptFood}<br />
                    {IntroLabelsEn.cptAbstract}<br />
                    {IntroLabelsEn.cptEmotion}<br />
                    {IntroLabelsEn.cptWeather}<br />
                </i>
            </Grid>

            <Typography style={{ marginTop: '3ch' }}>There will be <b>16</b> blocks of trials, one for each concept. You will be asked to rate all of the colors for each object before going on to the next block.</Typography>
        </Grid >
    )
}

export const IntroLabelsEn = {
    introTitle: "Instructions",
    cptFood: 'mango, peach, banana, carrot', // cpt is short for concept
    cptAbstract: 'safety, justice, peace, comfort',
    cptEmotion: 'sad, love, happy, angry',
    cptWeather: 'drought, lightning, sandstorm, hurricane'
}
export default IntroEn;