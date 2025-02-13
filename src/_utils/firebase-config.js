import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APPID
}

const firebaseConfig_ALT = {
    apiKey: process.env.REACT_APP_APIKEY_ALT,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_ALT,
    projectId: process.env.REACT_APP_PROJECTID_ALT,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_ALT,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID_ALT,
    appId: process.env.REACT_APP_APPID_ALT
}

const firebaseConfig_ALT_2 = {
    apiKey: process.env.REACT_APP_APIKEY_ALT_2,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_ALT_2,
    projectId: process.env.REACT_APP_PROJECTID_ALT_2,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_ALT_2,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID_ALT_2,
    appId: process.env.REACT_APP_APPID_ALT_2
}

// initialize firebase
const app = initializeApp(firebaseConfig_ALT_2)

// initialize cloud Firestore 
const fsdb = getFirestore(app)

export const logFs = async (id, record, expLang, expName) => {
    const path = `${expName}/${id}`
    return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
}

// // Params: id: sessionID, demData: data in JSON format
export const logDem = async (dem) => {
    if (dem.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    } else if (dem.expCountry === 'revisit') {
        return await setDoc(doc(fsdb, "revisit-" + dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    } else {
        return await setDoc(doc(fsdb, dem.expLang + "-" + dem.expName + "-dem", dem.sessionID), dem, { merge: true })
    }
}

/*
 * @param {*} id 
 * @param {*} record 
 * @param {*} expLang 
 * @param {*} expName 
 * @param {*} test (bool): 1 this is a test data, 0 thsi is a real data
 * @returns 
 */
export const logData_ = async (id, record, expLang, expName, test) => { // log data under en-color1/sessionID/
    const path = `${expName}/${id}`
    if (test) {
        return await setDoc(doc(fsdb, "test-" + expLang + "-" + path), record, { merge: true })
    } else {
        return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
    }
}

export const logData = async (dem, record) => {
    const path = dem.expName + '/' + dem.sessionID
    if (dem.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + dem.expLang + "-" + path), record, { merge: true })
    } else if (dem.expCountry === 'revisit') {
        return await setDoc(doc(fsdb, "revisit-" + dem.expLang + "-" + path), record, { merge: true })
    } else {
        return await setDoc(doc(fsdb, dem.expLang + "-" + path), record, { merge: true })
    }
}