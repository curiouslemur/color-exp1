import React from "react";
// import { StudyContext } from "../../_utils/contexts";

export const ConsentEn = (props) => {
    return (
        <>
            Here comes the consent page in English
        </>
    )
}


export const ConsentLabelsEn = {
    consentTitle: "Welcome",
    countryResQ: "From which country are you taking this survey?",
    countryResLabel: "Country of residence",
    countryResLenQ: "Since how many years are you living there?",
    countryResLenLabel: "",
    countryResLongestQ: "In which country have you lived the longest period of time?",
    countryResLongestLabel: "Longest country of residence",

    langNativeQ: "What is your native language?",
    langNativeLabel: "Mother tongue",
    langOtherQ: "What other languages do you know fluently?",
    langOtherLabel: "List all that apply",

    ageQ: "How old are you?", ageLabel: "Age",
    genderQ: "What is your gender?", genderLabel: "Gender",

    professionQ: "What is your profession?", professionLabel: "Profession",
    colorblindQ: "Do you have some form of color blindness?", colorblindLabel: "",
    colorblindYes: "Yes", colorblindNo: "No", colorblindIdk: "I don't know",

    sign: "Sign"
}

export default ConsentEn;