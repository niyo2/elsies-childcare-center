import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => onAuthStateChanged(auth, async (u) => {
    setUser(u); setProfile(null);
    if (u) {
      try { const snap = await getDoc(doc(db, "users", u.uid)); if (snap.exists()) setProfile(snap.data()); } catch (e) { console.error(e); }
    }
    setLoading(false);
  }), []);
  const value = useMemo(() => ({ user, profile, loading, logout: () => signOut(auth) }), [user, profile, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
