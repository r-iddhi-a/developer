"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebase";
import { useRouter } from "../next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
