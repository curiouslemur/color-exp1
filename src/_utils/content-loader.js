// Routines to load the corresponding pages depending on the language on the experiment
import * as pages_inEn from "../locals/english/_pagesEn"
import * as pages_inFr from "../locals/french/_pagesFr"
import * as options from "./selectOptions"

export const loadPages_inLang = (lang) => {
    switch (lang) {
        case "en":
            return pages_inEn
        case "fr":
            return pages_inFr
        default:
            return "Language unknown -- exp. pages not found"
    }
}

export const loadCountries_inLang = (lang) => {
    // switch (lang) {
    //     case "en":
    return options.countryNames[lang]
    // case "fr":
    //     return options.countryNames["fr"]
    // default:
    //     return "Language unknown -- country names not found"
    // }
}

export const loadLanguages_inLang = (lang) => {
    // switch (lang) {
    //     case "en":
    return options.languageNames.map(obj => ({ lang: obj[lang], "alpha3": obj.alpha3 }))
    //     return
    // default:
    //     return "Language unknown -- language names not found"
    // }
    // return options.languageNames
}