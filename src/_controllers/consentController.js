export const generateSessionID = () => {
    const d = new Date();
    // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // return month[d.getMonth()] + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
    let m = d.getMonth() + 1
    return "2024" + m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
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
    visFamiliarity: "",
    prolificID: getUrlParams().PROLIFIC_PID,
    expLang: getUrlParams().lang,
    sessionID: 0,
    progress: 0,
    expName: "color-exp1",
}

const checkStart = (dem, sdb) => {
    if (dem.countryResLen === "99") { sdb(false) }
    else if (dem.countryRes.length > 0
        & dem.countryResLen.length > 0
        & dem.countryResLongest.length > 0
        & dem.languageNative.length > 0
        & dem.languageOther.length > 0
        & dem.age.length > 0 & dem.gender.length > 0 & dem.profession.length > 0
        & dem.colorblind.length > 0
    ) { sdb(false) } else { sdb(true) }
}

export const onChangeField = (value, key, setDisabledButton) => {
    demography[key] = value
    sessionStorage.setItem("demography", JSON.stringify(demography))
    checkStart(demography, setDisabledButton)
}

export const onClickStart = (navigate, nextUrl) => {
    sessionStorage.setItem("demography", JSON.stringify(demography))
    navigate(nextUrl)
}