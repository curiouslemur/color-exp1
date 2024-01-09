import React from "react";
import { Button } from "@mui/material"

import * as ic from "../_controllers/introController"

export const Intro = (props) => {
    return (
        <>
            This is the main Intro Page
            <br />
            <Button onClick={(nav) => ic.onClickStart(props.navigate)}> Next </Button>
        </>
    )
}

export default Intro;