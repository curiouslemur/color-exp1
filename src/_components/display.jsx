import React, { useEffect } from "react";
import { Button } from "@mui/material";

import * as dc from "../_controllers/displayController"

export const Display = (props) => {
    useEffect(() => {
        document.body.classList.remove('consent-body');
        document.body.classList.add('display-body');
    }, []);

    return (
        <>
            This is the main Display Page
            <Button onClick={(nav, nu) => dc.onClickNext(props.navigate, props.nextUrl)}> Next </Button>
        </>
    )
}

export default Display;