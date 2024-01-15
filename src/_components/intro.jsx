import React, { useEffect, useState } from "react";
import { Chip, Button, Grid, Typography } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import * as d3 from 'd3'

import * as ic from "../_controllers/introController"

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Intro = (props) => {
    const [dialogIsOpen, setDialogOpen] = useState(false)
    const [chipLabel, setChipLabel] = useState("")

    const handleOpenDialog = (cl) => {
        setChipLabel(cl)
        setDialogOpen(true);
        d3.select("#tuto-color-patches").append('svg').attr('width', 100).attr('height', 100)
    };
    // const handleCloseDialog = () => { setDialogOpen(false); };

    useEffect(() => {
        document.body.classList.add('intro-body');
        ic.addGridColorPatches("#grid-color-patches")
    }, []);

    useEffect(() => {
        const svg = d3.select('#tuto')
            .append('svg')
            .attr('width', 400)
            .attr('height', 200);

        svg.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 30)
            .attr('fill', 'blue');
    }, [chipLabel])

    const labels = props.expPages.IntroLabels


    return (
        <Grid container style={styles.container} justifyContent="center">
            <Grid item xl={6} xs={9}>
                <Typography variant="h4">{labels.introTitle}</Typography>

                <hr style={{ color: "#ffffff00", backgroundColor: "#ffffff00", height: 1.5 }} />

                <Grid item ><props.expPages.Intro /> </Grid>

                <Grid item xs={12} sm={12} style={{ marginTop: 10 }} id="chips">
                    {props.conceptList.map(c =>
                        <ConceptChip key={c} value={c} id={c}
                            label={c}
                            variant={"outlined"}
                            selected={false}
                            handleClick={(cl) => handleOpenDialog(c)}
                        />
                    )}
                </Grid>

                {dialogIsOpen && <TutoSection
                    labels={labels} chipLabel={chipLabel} />}

                <Button variant='contained' style={{ marginTop: '5ch' }}
                    onClick={(nav, nu) => {
                        ic.onClickStart(props.navigate, props.nextUrl)
                    }}> {labels.start} </Button>

                <Grid item><props.expPages.Footer /></Grid>
            </Grid>


            {/* <TutoDialog dialogIsOpen={dialogIsOpen}
                handleClose={handleCloseDialog}
                labels={labels}
                chipLabel={chipLabel} /> */}
        </Grid>
    )
}

export const ConceptChip = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (<>
        <Chip
            disabled={disabled}
            label={props.label}
            style={{ marginTop: 10, marginRight: 10 }}
            onClick={(cl) => {
                setDisabled(true) // set the Chip as disabled
                // console.log(props.label)
                props.handleClick(true); // set the dialogIsOpen boolean as True -> modal opens
            }} />
    </>)
}

export const TutoSection = (props) => {

    useEffect(() => {
        // Your D3.js code to draw on the component
        const svg = d3.select('#tuto')
            .append('svg')
            .attr('width', 400)
            .attr('height', 200);

        svg.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 30)
            .attr('fill', 'blue');
    }, []);

    const labels = props.labels
    return (
        <Grid container style={styles.container} justifyContent="center">

            <Grid style={{ marginTop: 20 }}>
                <Typography variant="h7">{labels.tutoTitle} <b> {props.chipLabel}</b>?</Typography>
            </Grid>
            <div id="#tuto"></div>
            {/* <Grid id="#tuto-color-patches"></Grid> */}
        </Grid>
    )
}



export const TutoDialog = (props) => {
    const [open, setOpen] = useState(props.dialogIsOpen)
    const labels = props.labels

    return (
        <React.Fragment>
            <Dialog open={props.dialogIsOpen} //onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"            >
                <DialogTitle id="alert-dialog-title">  {labels.tutoTitle}  {props.chipLabel} ?</DialogTitle>
                <Grid id="tuto-color-patches"> </Grid>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>{labels.closeDialog}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Intro;