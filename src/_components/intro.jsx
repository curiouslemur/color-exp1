import React, { useEffect } from "react";
import { Button } from "@mui/material"

import * as ic from "../_controllers/introController"

export const Intro = (props) => {
    useEffect(() => {
        document.body.classList.remove('display-body');
        document.body.classList.add('intro-body');
    }, []);

    // const labels = props.expPages.IntroLabels
    return (
        <>
            This is the main Intro Page
            <br />
            <props.expPages.Intro />
            <Button onClick={(nav, nu) => ic.onClickStart(props.navigate, props.nextUrl)}> Next </Button>
        </>
    )
}

export default Intro;