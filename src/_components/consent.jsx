import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"

import { StudyContext } from "../_utils/contexts";
import * as cc from "../_controllers/consentController"

export const Consent = (props) => {

    const navigate = useNavigate()

    const { expLang } = useContext(StudyContext) // only here temp for testing context passing. Works!
    return (
        <>
            This is the main consent. And again, Language is <b>{expLang}</b>
            <br />
            <Button onClick={(n) => cc.onClickStart(navigate)}> Start </Button>
        </>
    )
}

export default Consent