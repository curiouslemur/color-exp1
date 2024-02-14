export const generateSessionID = () => {
    const D = new Date();
    let m = D.getMonth() + 1
    let month = m < 10 ? "0" + m : m // if month is Jan --> 01 instead of just 1
    let d = D.getDate()
    let day = d < 10 ? "0" + d : d
    return "2024" + month + day + "-" + D.getHours() + D.getMinutes() + "-" + D.getSeconds() + D.getMilliseconds()
}

export const getUrlParams = () => {
    var urlParams = new URLSearchParams(window.location.search)
    var entries = urlParams.entries();

    let params = {}
    for (var pair of entries) {
        params[pair[0]] = pair[1]
    }
    return params;
}

var demography = {
    countryRes: "",
    countryResLen: "",
    countryResLongest: "",
    languageNative: "",
    languageOther: "",
    age: "",
    gender: "",
    profession: "",
    colorblind: "",
    // visFamiliarity: "",
    prolificID: getUrlParams().PROLIFIC_PID ? getUrlParams().PROLIFIC_PID : "",
    expLang: getUrlParams().lang ? getUrlParams().lang : "en",
    expCountry: getUrlParams().ct ? getUrlParams().ct : "", // mdg2 == pilot #2 for mdg participants
    sessionID: 0,
    // progress: 0,
    expName: "color1",
    progressBlock: 0,
    progressColor: 0
}

// // Params: demography, setDisableButton: dis/enable button to move to next experiment page
const checkStart = (dem, setDisableButton) => {
    if (dem.countryResLen === "999") { setDisableButton(false) }
    else if (dem.countryRes.length > 0
        & dem.countryResLen.length > 0
        & dem.countryResLongest.length > 0
        & dem.languageNative.length > 0
        // & dem.languageOther.length > 0
        & dem.age.length > 0 & dem.gender.length > 0 & dem.profession.length > 0
        & dem.colorblind.length > 0
    ) { setDisableButton(false) } else { setDisableButton(true) }
}

export const onChangeField = (value, key, setDisabledButton) => {
    demography[key] = value
    sessionStorage.setItem("demography", JSON.stringify(demography))
    checkStart(demography, setDisabledButton)
}

export const onClickStart = (sessionID, navigate, nextUrl) => {
    demography.sessionID = sessionID
    sessionStorage.setItem("demography", JSON.stringify(demography))
    document.body.classList.remove('consent-body');
    navigate(nextUrl)
}