import React from "react";
import { Grid, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export const ConsentEn = (props) => {
    return (
        <Grid container alignContent={'justify'}>
            <Typography paragraph> Before you begin, please read this page carefully.</Typography>
            <Typography paragraph><b style={{ color: props.keywordColor }}>The goal of this study is </b>
                to learn the different ways people associate colors to concepts of everyday life, and vice versa.</Typography>

            <Typography paragraph><b style={{ color: props.keywordColor }}>Procedure: </b>
                You will be asked to **rate how much you associate a color with a given concept**, using a continuous scale from <i>“not at all”</i> to <i>“very much”</i>.
                Before starting, you will be asked to provide information about you and to adjust the brightness of your screen.
            </Typography>

            <Grid style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: 10 }}>

                <span paragraph> At all time, the help </span>   <HelpOutlineIcon style={{ marginLeft: 5, marginRight: 5 }} fontSize="medium" /> <span> button will be available at the top-left of the screen. Click to review instructions on how to complete the survey.</span>
            </Grid>

            <Typography paragraph> <b style={{ color: props.keywordColor }}>Duration: </b> The experiment will take about 30 minutes</Typography>

            <Typography paragraph> <b style={{ color: props.keywordColor }}>Risks to study participants: : </b>
                There are no expected risks to you beyond using a computer in a way similar to everyday activity.
            </Typography>

            <Typography paragraph> <b style={{ color: props.keywordColor }}>Privacy: </b>Your participation is anonymous and your responses cannot be used to identify you.</Typography>

            <Typography paragraph> <b style={{ color: props.keywordColor }}>Record keeping: </b> Records of your participation will be held confidential so far as permitted by law.
                However, the study investigators and, under certain circumstances, the Worcester Polytechnic Institute Institutional Review Board (WPI IRB) will be able to inspect and have access to this data.
                Any publication or presentation of the data will <b>not</b> identify you.</Typography>

            <Typography paragraph> <b style={{ color: props.keywordColor }}> Your participation in this research is voluntary.  </b> Your refusal to participate will not result in any penalty to you or any loss of benefits to which you may otherwise be entitled.
                You may decide to stop participating in the research at any time without penalty or loss of other benefits. </Typography>

            <Typography paragraph> <b style={{ color: props.keywordColor }}>For more information </b> about this research or your rights as a study participant, please contact Dr.Lane Harrison, Email: ltharrison(at)wpi(dot)edu </Typography>
            <Typography paragraph> <b style={{ color: props.keywordColor }}>If you agree to participate, </b> please provide the following information and then click * Sign *</Typography>
            {/* <Typography> <b style={{ color: props.keywordColor }}></b> </Typography> */}
        </Grid>
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