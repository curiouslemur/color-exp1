import React, { useContext } from "react";
import { StudyContext } from "../../_utils/contexts";

export const ConsentEn = (props) => {
    return (
        <>
            <h1>This is the consent page in <b>English</b></h1>
            <ConsentChild />
        </>
    )
}

const ConsentChild = (props) => {
    const { expLang } = useContext(StudyContext)
    return (
        <>
            <br /> And language is <h1>{expLang}</h1>
        </>
    )
}

export default ConsentEn;