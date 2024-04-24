import { auth, provider } from "./firebase.config";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signUpWithEmailPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.error(e);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
};
