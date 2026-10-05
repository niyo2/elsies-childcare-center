import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

export default function ParentLogin() {
  const [mode,setMode]=useState("login"); const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  const nav=useNavigate(); const location=useLocation();
  const submit=async(e)=>{e.preventDefault();setError("");setBusy(true);try{
    if(mode==="register") { const cred=await createUserWithEmailAndPassword(auth,email,password); await setDoc(doc(db,"users",cred.user.uid),{name,email,role:"parent",createdAt:serverTimestamp()}); }
    else await signInWithEmailAndPassword(auth,email,password);
    nav(location.state?.from?.pathname || "/parent",{replace:true});
  } catch(err){ setError(err.code?.replace("auth/","").replaceAll("-"," ") || "Unable to sign in."); } finally {setBusy(false);} };
  return <div className="max-w-md mx-auto rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
    <p className="text-sm font-semibold text-sky-700">Family access</p><h1 className="mt-2 text-3xl font-bold text-slate-900">{mode==="login"?"Parent Login":"Create Parent Account"}</h1>
    <p className="mt-2 text-sm text-slate-600">Secure access for enrolled and prospective families.</p>
    <form onSubmit={submit} className="mt-6 space-y-4">{mode==="register"&&<input className="w-full rounded-xl border p-3" placeholder="Parent/guardian name" value={name} onChange={e=>setName(e.target.value)} required/>}<input className="w-full rounded-xl border p-3" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><input className="w-full rounded-xl border p-3" type="password" minLength="6" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>{error&&<p className="text-sm text-red-600">{error}</p>}<button disabled={busy} className="w-full rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white disabled:opacity-60">{busy?"Please wait…":mode==="login"?"Sign In":"Create Account"}</button></form>
    <button onClick={()=>{setMode(mode==="login"?"register":"login");setError("")}} className="mt-4 text-sm font-semibold text-sky-700">{mode==="login"?"New parent? Create an account":"Already have an account? Sign in"}</button>
  </div>;
}
