import React, { useEffect, useState } from "react";
import { Box, Chip, Button, Grid, Modal, Typography } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"
// import * as colorCode from '../stimuli/png/'
import greyscale from '../_utils/gray-scale-donut.png'
import { color } from "d3";


const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    root: { flexGrow: 1, margin: '0%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Intro = (props) => {
    const [tutoIsopen, setTutoOpen] = useState(false)
    const [chipLabel, setChipLabel] = useState("")

    const handleOpenTutoSection = (chipLabel) => {
        setChipLabel(chipLabel);
        setTutoOpen(true);
    };

    useEffect(() => {
        document.body.classList.add('intro-body');
        ic.addGridColorPatches("#grid-color-patches", 35, 10);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <Grid container justifyContent="center"        >
            <Grid item xl={6} xs={9}>
                <Typography variant="h4">{labels.introTitle}</Typography>

                <hr style={{ color: "#ffffff00", backgroundColor: "#ffffff00", height: 1.5 }} />
                <Typography paragraph>{labels.introOpening}</Typography>

                <Grid id="grid-color-patches" style={{ marginTop: 10 }}></Grid>

                <Grid item ><props.expPages.Intro /> </Grid>

                <Grid item xs={12} sm={12} style={{ marginTop: 10 }} id="chips">
                    {props.conceptList.map(c =>
                        <ConceptChip key={c} value={c} id={c}
                            label={c}
                            variant={"outlined"}
                            selected={false}
                            handleClick={(chipLabel) => handleOpenTutoSection(c)}
                        />
                    )}
                </Grid>

                {tutoIsopen && <TutoSection
                    labels={labels} chipLabel={chipLabel}
                />}

                <Button variant='contained' style={{ marginTop: '5ch' }}
                    onClick={(nav, nu) => {
                        ic.onClickStart(props.navigate, props.nextUrl)
                    }}> {labels.start} </Button>

                <Grid item><props.expPages.Footer /></Grid>
            </Grid>

            {/* <TutoDialog dialogIsOpen={dialogIsOpen}
                handleClose={handleCloseDialog}
                setDialogOpen={setDialogOpen}
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
                props.handleClick(true);
            }} />
    </>)
}

export const TutoSection = (props) => {

    const [modalIsOpen, setModalOpen] = useState(false)
    const [modalColorCode, setModalColorCode] = useState('')

    const handleCloseModal = () => setModalOpen(false)
    const handleOpenModal = (colorCode) => {
        console.log("colorcode:", colorCode)
        setModalOpen(true)
        setModalColorCode(colorCode)
    }
    useEffect(() => { ic.addGridColorPatchesTuto("#tuto-section", 30, 10, handleOpenModal); }, []);

    const labels = props.labels
    return (
        <Grid container style={styles.container} //justifyContent="center"
            direction="column"
            alignItems="center"
            rowSpacing={10}
        >
            <Grid item style={{ marginTop: 30 }} xs={12} sm={6}>
                <Typography variant="h7"
                    style={{ backgroundColor: 'white', padding: 7 }}
                >{labels.tutoTitle} <b> {props.chipLabel}</b>?</Typography>
            </Grid>

            <Grid id="tuto-section" style={{ marginTop: 20 }}></Grid>

            <TutoModal open={modalIsOpen}
                close={handleCloseModal}
                modalColorCode={modalColorCode}>
            </TutoModal>
        </Grid>
    )
}

const TutoModal = (props) => {
    console.log(props.modalColorCode)
    return (<Modal
        open={props.open}
        //onClose={handleCloseModal} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">

            </Typography>
            <img src={"./png/" + props.modalColorCode + ".png"} alt="color-patches" width="100px" />
            <div id="test"></div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={props.close}>Close</Button>
        </Box>
    </Modal>)
}
// export const TutoDialog = (props) => {
//     const labels = props.labels

//     return (
//         <React.Fragment>
//             <Dialog open={props.dialogIsOpen} //onClose={handleCloseDialog}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"            >
//                 {/* <DialogTitle id="alert-dialog-title">  {labels.tutoTitle}  {props.chipLabel} ?</DialogTitle> */}

//                 <Grid id="tuto-slider"> </Grid>
//                 <DialogContent>
//                     <div>
//                         Let Google help apps determine location. This means sending anonymous
//                         location data to Google, even when no apps are running.
//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={props.handleClose}>{labels.closeDialog}</Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>
//     );
// }

export default Intro;