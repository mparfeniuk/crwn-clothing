import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyAcIPPslWadNrf4BwdX4_nV4traG4S4jJ0",
    authDomain: "crwn-db-dd72e.firebaseapp.com",
    databaseURL: "https://crwn-db-dd72e.firebaseio.com",
    projectId: "crwn-db-dd72e",
    storageBucket: "crwn-db-dd72e.appspot.com",
    messagingSenderId: "27400806437",
    appId: "1:27400806437:web:838bae28971f42beb7dfcc"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}  

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
