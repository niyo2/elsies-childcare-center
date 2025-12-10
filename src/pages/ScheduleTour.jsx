import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import Contact from "./Contact";

export default function ScheduleTour() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    date: "",
    time: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitted");

    setTimeout(() => {
      setStatus("");
      setForm({
        parentName: "",
        childName: "",
        phone: "",
        date: "",
        time: "",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-sky-900 text-center mb-6">
          Schedule a Tour
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-4">

          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Child’s Name</label>
            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-sky-700 hover:bg-sky-800 text-white py-2 rounded-lg font-semibold"
          >
            Submit
          </button>

          {status === "submitted" && (
            <p className="mt-4 text-green-600 text-center font-semibold">
              Tour request submitted!
            </p>
          )}

        </form>
      </div>
    </div>
  );
}
