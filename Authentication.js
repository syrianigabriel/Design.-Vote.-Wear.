// app/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig'; // Adjust the import based on your firebase config file

const auth = getAuth(app);


export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user.email);
        return userCredential;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in with:", userCredential.user.email);
        return userCredential;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
