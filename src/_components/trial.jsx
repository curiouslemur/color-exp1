import React from "react";
import { Button } from "@mui/material";

import * as tc from "../_controllers/trialController"
export const Trial = (props) => {
    return (
        <>
            This is the main trial page
            <Button onClick={(nav, nu) => tc.onClickNext(props.navigate, props.nextUrl)}>Next</Button>
        </>
    )
}

export default Trial;