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

export const logDem = async (id, record, expLang, expName) => { // log demography under en-color1-dem/sessionID
    // const path = `${expName + '-dem'}/${id}`
    // return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
    return await setDoc(doc(fsdb, expLang + "-" + expName + "-dem", id), record, { merge: true })

}

export const logData = async (id, record, expLang, expName) => { // log data under en-color1/sessionID/
    const path = `${expName}/${id}`
    return await setDoc(doc(fsdb, expLang + "-" + path), record, { merge: true })
}