import { useState } from "react";
import { auth, provider } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // menggunakan async karena jika kita bekerja menggunakan firebase makan akan menggunakan promise
  console.log(auth?.currentUser?.emailVerified);
  const signIn = async () => {
    // handling error

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // sign With Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  // sign With Google
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ margin: "200px" }}>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={signIn}>Sign In </button>

      {/* sign With Google */}
      <button onClick={signInWithGoogle}>Sign With Google</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};
