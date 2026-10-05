import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div className="py-16 text-center text-slate-600">Loading account…</div>;
  if (!user) return <Navigate to="/parent-login" replace state={{ from: location }} />;
  if (adminOnly && profile?.role !== "admin") return <Navigate to="/parent" replace />;
  return children;
}
