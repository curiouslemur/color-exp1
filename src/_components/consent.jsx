import React, { useContext } from "react";
import { StudyContext } from "../_utils/contexts";

export const Consent = (props) => {
    const { expLang } = useContext(StudyContext)
    return (
        <>
            This is the main consent. And again, Language is <b>{expLang}</b>
        </>
    )
}

export default Consent