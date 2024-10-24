// app/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';
import { auth, firestore } from './firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

export const registerUser = async (email, password, firstName, lastName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user.email);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email
        });

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
