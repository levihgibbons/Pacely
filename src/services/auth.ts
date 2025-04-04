import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaytQgbYR0jyxbawZjAcdAXBcP86kNpWk",
  authDomain: "pacely-806a5.firebaseapp.com",
  projectId: "pacely-806a5",
  storageBucket: "pacely-806a5.firebasestorage.app",
  messagingSenderId: "865997860853",
  appId: "1:865997860853:web:ce64ce15b9b47dabd4babc",
  measurementId: "G-6FMDW1MDJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  try {
    console.log('Attempting to sign up with:', email);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Sign up successful:', userCredential);
    return userCredential;
  } catch (error: any) {
    console.error('SignUp Error:', error.code, error.message);
    throw error;
  }
};

export const login = async (email: string, password: string): Promise<UserCredential> => {
  try {
    console.log('Attempting to log in with:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful:', userCredential);
    return userCredential;
  } catch (error: any) {
    console.error('Login Error:', error.code, error.message);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('Logout successful');
  } catch (error: any) {
    console.error('Logout Error:', error.code, error.message);
    throw error;
  }
};

export { auth }; 