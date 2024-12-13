// src/components/SignIn.tsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebaseAuth"; 

const FirebaseSignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // console.log("User mail",password) 
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(userCredential); 
      console.log("User signed in:", user);
    } catch (err) {
      console.error(err);
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}  
    </form>
  );
};

export default FirebaseSignIn;
