import React from "react";
import { Button } from "@mui/material";

import * as tc from "../_controllers/trialController"
export const Trial = (props) => {
    return (
        <>
            This is the main trial page
            <Button onClick={(nav) => tc.onClickNext(props.navigate)}>Next</Button>
        </>
    )
}

export default Trial;