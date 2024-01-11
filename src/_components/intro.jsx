import React, { useEffect } from "react";
import { Box, Button } from "@mui/material"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import * as ic from "../_controllers/introController"

export const Intro = (props) => {
    useEffect(() => {
        document.body.classList.remove('display-body');
        document.body.classList.add('intro-body');
    }, []);

    // const labels = props.expPages.IntroLabels
    return (
        <>
            <br />
            <Box
                position="absolute"
                top={0}
                left={0}
                // width={400}
                // bgcolor="white"
                p={0.2}
            >
                Can this icon <HelpOutlineIcon fontSize="medium"
                    onClick={() => { alert('opening modal') }}
                /> Be inline
            </Box>
            <props.expPages.Intro />
            <Button onClick={(nav, nu) => ic.onClickStart(props.navigate, props.nextUrl)}> Next </Button>
        </>
    )
}

export default Intro;