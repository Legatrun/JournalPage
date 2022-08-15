import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result)

        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,

            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const mail = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error)

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registeruserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL } = resp.user;

        // "firebaseAuth.currentUser" es el actual usuario
        await updateProfile(firebaseAuth.currentUser, { displayName });


        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const loginWithEmailPassword = async ({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const logoutFirebase = async () => {
    // "firebaseAuth.signOut" cierra cualquier sesion de cualquier provider
    return await firebaseAuth.signOut()
}