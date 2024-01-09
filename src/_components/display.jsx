import React from "react";
import { Button } from "@mui/material";

import * as dc from "../_controllers/displayController"

export const Display = (props) => {

    return (
        <>
            This is the main Display Page
            <Button onClick={(nav) => dc.onClickNext(props.navigate)}> Next </Button>
        </>
    )
}

export default Display;