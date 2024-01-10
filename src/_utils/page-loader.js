// Routines to load the corresponding pages depending on the language on the experiment
import * as pages_inEn from "../locals/english/_pagesEn"
import * as pages_inFr from "../locals/french/_pagesFr"
import * as countries from "../_utils/countries"

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
    switch (lang) {
        case "en":
            return countries.countryNames["en"]
        case "fr":
            return countries.countryNames["fr"]
        default:
            return "Language unknown -- country names not found"
    }
}