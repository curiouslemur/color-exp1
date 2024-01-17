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
    const [tryOut, setTryOut] = useState(0)
    const [cannotStart, setCannotStart] = useState(true)

    const handleOpenTutoSection = (chipLabel) => {
        setChipLabel(chipLabel);
        // Math.floor(tryOut) === 1 ? setTryOut(0) : setTryOut(1)
        setTryOut(tryOut + 1)
        setTutoOpen(true);
    };

    useEffect(() => {
        document.body.classList.add('intro-body');
        ic.addGridColorPatches("#grid-color-patches", 35, 10);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <IntroContext.Provider value={{ chipLabel, tryOut, setCannotStart }}>
            <Grid container justifyContent="center">
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
                                handleClick={(chipLabel) => handleOpenTutoSection(c, tryOut)}
                            />
                        )}
                    </Grid>

                    {tutoIsopen && <TutoSection labels={labels} chipLabel={chipLabel} />}

                    <Button variant='contained' style={{ marginTop: '0ch' }}
                        disabled={cannotStart}
                        onClick={(nav, nu) => {
                            ic.onClickStart(props.navigate, props.nextUrl)
                        }}> {labels.start} </Button>

                    <Grid item><props.expPages.Footer /></Grid>
                </Grid>
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
    const { tryOut, setCannotStart } = useContext(IntroContext);
    const [modalIsOpen, setModalOpen] = useState(false)
    const [modalColorCode, setModalColorCode] = useState('')

    const labels = props.labels
    const handleCloseModal = () => {
        setModalOpen(false)
        tryOut < 2 ? alert(labels.alert) : setCannotStart(false)
    }
    const handleOpenModal = (colorCode) => {
        setModalOpen(true)
        setModalColorCode(colorCode)
    }
    useEffect(() => { ic.addGridColorPatchesTuto("#tuto-section", 30, 10, handleOpenModal); }, []);

    return (
        <Grid container//justifyContent="center"
            direction="column"
            alignItems="center"
            rowSpacing={10}
        >
            <Grid item style={{ marginTop: 30 }} xs={12} sm={6}>
                <Typography variant="h7" style={{ backgroundColor: 'white', padding: 7 }}>
                    {Math.floor(tryOut / 2) === 1 ? labels.tutoQMost : labels.tutoQLeast}  <b> {props.chipLabel}</b>?
                </Typography>
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

    const onChangeSlider = (e) => { setSliderValue(e.target.value) }

    return (
        <ThemeProvider theme={sliderTheme}>
            <Modal
                open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={sliderStyle}
                    xs={12} sm={6}
                    width={400}
                    alignItems="center"
                    maxHeight={'100%'}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >

                        <Typography id="modal-modal-title" >
                            When you see that color with the concept of</Typography>
                        <Typography><b>{chipLabel.toUpperCase()}</b></Typography>
                        <img style={{ marginTop: 15, marginBottom: 25 }} src={"./png/" + props.modalColorCode + ".png"} alt="color-patches" width="100px" />

                        <Typography> you would move the slider ⚫️ near <i>'Very much.’</i></Typography>
                        <div style={{ marginTop: 20 }}>
                            <Slider
                                track={false}
                                marks={marks}
                                sx={{ width: 400, boxShadow: 0, }}
                                value={sliderValue}
                                onChange={onChangeSlider}
                            />
                        </div>

                        <Button variant="outlined" style={{ marginTop: 10 }} onClick={props.close}>Next</Button>
                    </Grid>
                </Box>
            </Modal>
        </ThemeProvider>)
}

export default Intro;