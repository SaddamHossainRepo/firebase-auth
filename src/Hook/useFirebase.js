
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebaseConfig';
const useFirebase = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const test2 = () => {
        console.log('I am test 2');
    }

    return { handleGoogleLogin, test2 };
}

export default useFirebase;