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

// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize cloud Firestore 
const fsdb = getFirestore(app)

export const logFs = async (id, record, expLang, expName) => {
    const path = `${expName}/${id}`
    return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
}

// // Params: id: sessionID, demData: data in JSON format
export const logDem = async (id, demData, expLang, expName) => { // log demography under en-color1-dem/sessionID
    if (demData.countryResLen === '999') {
        return await setDoc(doc(fsdb, "test-" + expLang + "-" + expName + "-dem", id), demData, { merge: true })
    } else {
        return await setDoc(doc(fsdb, expLang + "-" + expName + "-dem", id), demData, { merge: true })
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
export const logData = async (id, record, expLang, expName, test) => { // log data under en-color1/sessionID/
    const path = `${expName}/${id}`
    if (test) {
        return await setDoc(doc(fsdb, "test-" + expLang + "-" + path), record, { merge: true })
    } else {
        return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
    }
}