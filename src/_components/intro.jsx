import React, { useEffect, useState, createContext, useContext } from "react";
import { Box, Chip, Button, Grid, Modal, Slider, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"
import { sliderStyle, sliderTheme } from "../stimuli/slider";

const IntroContext = createContext()

export const Intro = (props) => {
    const [tutoIsopen, setTutoOpen] = useState(false)
    const [chipLabel, setChipLabel] = useState("")
    const [tryOut, setTryOut] = useState(Math.floor(Math.random() * (1 - 0 + 1)) + 0) // Math.floor(Math.random() * (max - min + 1)) + min;
    const [cannotStart, setCannotStart] = useState(true)

    const handleOpenTutoSection = (chipLabel) => {
        setChipLabel(chipLabel);
        setTryOut(tryOut + 1)
        setTutoOpen(true);
    };

    useEffect(() => {
        document.body.classList.add('intro-body');
        ic.addGridColorPatches("#grid-color-patches", 35, 10);
    }, []);

    const labels = props.expPages.IntroLabels

    return (
        <IntroContext.Provider value={{ labels, chipLabel, tryOut, setCannotStart }}>
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

                    <Button variant='contained' style={{ marginTop: '5ch' }}
                        disabled={cannotStart}
                        onClick={(nav, nu) => {
                            ic.onClickStart(props.navigate, props.nextUrl)
                        }}> {labels.start} </Button>

                    <Grid item style={{ margin: '15px' }}>
                        {!cannotStart && <div>
                            <Typography>{labels.noteHelp} <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" /> </Typography>
                            <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
                                <HelpOutlineIcon />
                            </div>
                        </div>}
                    </Grid>
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
        if (tryOut < 2) { alert(labels.alertAgain) }
        else { setCannotStart(false); alert(labels.alertStart) }

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
                modalColorCode={modalColorCode}
                labels={props.labels}>
            </TutoModal>
        </Grid>
    )
}

const TutoModal = (props) => {
    const { chipLabel, labels, tryOut } = useContext(IntroContext);

    const [sliderValue, setSliderValue] = useState(50)
    const [cannotCloseModal, setcannotCloseModal] = useState(true)

    const marks = [
        { value: -0, label: labels.markMost, },
        { value: 50, },
        { value: 100, label: labels.markLeast },
    ];

    // const sliderStyle = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: '600',
    //     bgcolor: 'background.paper',
    //     border: '0px solid #000',
    //     boxShadow: 24,
    //     p: 6,
    // };

    // const sliderTheme = createTheme({
    //     components: {
    //         MuiSlider: {
    //             styleOverrides: {
    //                 thumb: {
    //                     borderRadius: '50%', color: 'black', width: '20px', height: '20px',
    //                     ":hover": { boxShadow: 'none' }
    //                 },
    //                 track: {},
    //                 rail: { color: '#eaecef', height: '10px', borderRadius: '0px', opacity: '0.75' },
    //                 mark: { width: '3px', height: '30px', color: 'black', opacity: '1' },
    //                 markLabel: { fontSize: 16 }
    //             }
    //         }
    //     }
    // });

    const onChangeSlider = (e) => {
        setcannotCloseModal(false)
        setSliderValue(e.target.value)
    }

    const closeModal = () => {
        setSliderValue(50)
        setcannotCloseModal(true)
        props.close()
    }

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

                        <Typography id="modal-modal-title" >{labels.modalWhen}</Typography>
                        <Typography><b>{chipLabel.toUpperCase()}</b></Typography>
                        <img style={{ marginTop: 15, marginBottom: 25 }} src={"./png/" + props.modalColorCode + ".png"} alt="color-patches" width="100px" />

                        <Typography> {labels.modalMove} <i>
                            {Math.floor(tryOut / 2) === 1 ? labels.modalMarkerMost : labels.modalMarkerLeast}  <b> {props.chipLabel}</b>?

                        </i></Typography>
                        <div style={{ marginTop: 20 }}>
                            <Slider
                                track={false}
                                marks={marks}
                                sx={{ width: 400, boxShadow: 0, }}
                                value={sliderValue}
                                onChange={onChangeSlider}
                            />
                        </div>

                        <Button variant="outlined" style={{ marginTop: 10 }}
                            disabled={cannotCloseModal}
                            onClick={closeModal}>{labels.modalNext}</Button>
                    </Grid>
                </Box>
            </Modal>
        </ThemeProvider>)
}

export default Intro;