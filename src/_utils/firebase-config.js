import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore'

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

export const logDem = () => { // log demography 

}

export const logData = () => {

}