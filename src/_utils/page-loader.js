// Routines to load the corresponding pages depending on the language on the experiment
import * as pages_inEn from "../locals/english/_pagesEn"
import * as pages_inFr from "../locals/french/_pagesFr"

export const loadPages_inLang = (lang) => {
    switch (lang) {
        case "en":
            return pages_inEn
        case "fr":
            return pages_inFr
        default:
            return "Language unknown"
    }
}