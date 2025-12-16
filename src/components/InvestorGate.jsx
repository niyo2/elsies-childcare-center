import React, { useMemo, useState } from "react";

export default function InvestorGate({ children }) {
  const expected = useMemo(
    () => process.env.REACT_APP_INVESTOR_PASSWORD || "",
    []
  );

  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [granted, setGranted] = useState(
    () => sessionStorage.getItem("investor_access") === "granted"
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!expected) {
      setError("Investor password is not configured.");
      return;
    }
    if (pw === expected) {
      sessionStorage.setItem("investor_access", "granted");
      setGranted(true);
      setError("");
      setPw("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (granted) return <>{children}</>;

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white shadow p-8">
        <h1 className="text-2xl font-bold text-slate-900">Investor Access</h1>
        <p className="mt-2 text-slate-600">
          This page is private for investors and grant reviewers.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter password"
              autoFocus
            />
          </label>

          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <p className="text-xs text-slate-500">
              Tip: Access remains until you close the browser tab.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 transition"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
