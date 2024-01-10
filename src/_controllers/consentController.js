export const generateSessionID = () => {
    const d = new Date();
    // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // return month[d.getMonth()] + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
    let m = d.getMonth() + 1
    return "2024" + m + d.getDate() + "-" + d.getHours() + d.getMinutes() + "-" + d.getSeconds() + d.getMilliseconds()
}

export const getProlificId = () => {
    var urlParams = new URLSearchParams(window.location.search)
    // var keys = urlParams.keys(); 
    // for(key of keys) { ID_keys[i]=key, i++   }
    var idKeys = [], idValues = [], j = 0
    let tmp, prolificID
    var entries = urlParams.entries();
    for (var pair of entries) {
        if (pair[0] === "PROLIFIC_PID") { tmp = pair[1] }
        idKeys[j] = pair[0]
        idValues[j] = pair[1]
        j++
    }
    tmp != null
        ? prolificID = tmp
        : prolificID = ""
    return prolificID;
}

var demography = {
    country: "",
    firstLanguage: "",
    secondLanguage: "",
    age: "",
    gender: "",
    visFamiliarity: "",
    prolificID: getProlificId(),
    sessionID: 0,
    progress: 0,
    expName: "",
    jobtitle: ""
}

export const onClickStart = (navigate, nextUrl) => {
    navigate(nextUrl)
}

// export const onChangeField = (e, key, setter, setCannotStart) => {
//     setCannotStart(false)
//     if (setter != null) {
//         setter(e.target.value)
//     }
//     demography[key] = e.target.value
//     sessionStorage.setItem("demography", JSON.stringify(demography))
//     // checkStart(demography, setCannotStart)
// }


const checkStart = (test, sdb) => {
    if (test.countryRes.length > 0) { sdb(false) } else { sdb(true) }
}


export const onChangeField = (value, key, setDisabledButton) => {
    setDisabledButton(false)
    demography[key] = value
    sessionStorage.setItem("demography", JSON.stringify(demography))
    checkStart(demography, setDisabledButton)
}