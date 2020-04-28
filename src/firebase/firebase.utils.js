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

    const userRef = firestore.doc(`users/${userAuth.uid}`);;
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

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account'})

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export default firebase
