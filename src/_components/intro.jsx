import React, { useEffect, useState } from "react";
import { Box, Chip, Button, Grid, Typography } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import * as ic from "../_controllers/introController"
import { isDisabled } from "@testing-library/user-event/dist/utils";


const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', padding: '1%' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Intro = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [chipLabel, setChipLabel] = useState("")

    const handleOpenDialog = (cl) => {
        setChipLabel(cl)
        setDialogOpen(true);
    };
    const handleCloseDialog = () => { setDialogOpen(false); };

    useEffect(() => {
        document.body.classList.add('intro-body');
        ic.addGridColorPatches("#grid-color-patches")
        ic.addGridColorPatches("#tuto-color-patches")
    }, []);

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

                <Button variant='contained' style={{ marginTop: '5ch' }}
                    onClick={(nav, nu) => {
                        ic.onClickStart(props.navigate, props.nextUrl)
                    }}> {labels.start} </Button>
                <Grid item><props.expPages.Footer /></Grid>
            </Grid>

            <TutoDialog dialogOpen={dialogOpen}
                handleClose={handleCloseDialog}
                labels={labels}
                chipLabel={chipLabel}
            />
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
                console.log(props.label)
                props.handleClick(true); // set the dialogOpen boolean as True -> modal opens
            }} />
    </>)
}

export const TutoDialog = (props) => {
    const [open, setOpen] = useState(props.dialogOpen)
    const labels = props.labels

    return (
        <React.Fragment>
            <Dialog open={props.dialogOpen} //onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"            >
                <DialogTitle id="alert-dialog-title">  {labels.tutoTitle}  {props.chipLabel}?</DialogTitle>
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