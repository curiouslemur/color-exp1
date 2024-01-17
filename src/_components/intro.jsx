import React, { useEffect, useState, createContext, useContext } from "react";
import { Box, Chip, Button, Grid, Modal, Slider, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"
// import * as colorCode from '../stimuli/png/'

const IntroContext = createContext()

const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    root: { flexGrow: 1, margin: '0%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

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
        <IntroContext.Provider value={{ chipLabel }}>
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
        </IntroContext.Provider>
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
        setModalOpen(true)
        setModalColorCode(colorCode)
    }
    useEffect(() => { ic.addGridColorPatchesTuto("#tuto-section", 30, 10, handleOpenModal); }, []);

    const labels = props.labels
    return (
        <Grid container//justifyContent="center"
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
    const { chipLabel } = useContext(IntroContext);
    const [sliderValue, setSliderValue] = useState(50)
    const marks = [
        { value: -0, label: "Not at all", },
        { value: 50, },
        { value: 100, label: "Very much", },
    ];
    const sliderStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600',
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 6,
    };

    const sliderTheme = createTheme({
        components: {
            MuiSlider: {
                styleOverrides: {
                    thumb: {
                        borderRadius: '50%', color: 'black', width: '20px', height: '20px',
                        ":hover": { boxShadow: 'none' }
                    },
                    track: {},
                    rail: { color: '#eaecef', height: '10px', borderRadius: '0px', opacity: '0.75' },
                    mark: { width: '3px', height: '30px', color: 'black', opacity: '1' },
                    markLabel: { fontSize: 16 }
                }
            }
        }
    });

    // const onChangeSlider = (e) => { console.log(e.target.value) }
    const onChangeSlider = (e) => { setSliderValue(e.target.value) }

    return (
        <ThemeProvider theme={sliderTheme}>
            <Modal
                open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Grid container//justifyContent="center"
                    direction="column"
                    alignItems="center"
                    rowSpacing={5}
                >
                    <Grid item
                        sx={sliderStyle}
                        xs={12} sm={6}
                        width={400}
                        alignItems="center"
                        rowSpacing={10}
                    >

                        {/* <Grid item sx={sliderStyle} style={{ marginTop: 30 }} xs={12} sm={6}> */}
                        <Typography id="modal-modal-title" component="h2">When you see that color for <b>{chipLabel}</b>, you would rate it near ‘Very much.’</Typography>

                        <img style={{ marginTop: 30 }} src={"./png/" + props.modalColorCode + ".png"} alt="color-patches" width="100px" />

                        <div style={{ marginTop: 30 }}>
                            <Slider
                                track={false}
                                marks={marks}
                                sx={{ width: 400, boxShadow: 0, }}
                                value={sliderValue}
                                onChange={onChangeSlider}
                            // onChangeCommitted={(e) => { setCanproceed(true) }}
                            />
                        </div>
                        <Typography style={{ marginTop: 30 }}>Hello</Typography>
                        <Button style={{ marginTop: 10 }} onClick={props.close}>Close</Button>
                    </Grid>
                </Grid>
            </Modal>
        </ThemeProvider>)
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