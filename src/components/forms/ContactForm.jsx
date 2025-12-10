import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMPORARY: next step we save to Firestore
    setStatus("submitted");

    setTimeout(() => {
      setStatus("");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-sky-900 mb-4">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            required
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
          />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-900 text-white py-2 rounded-md hover:bg-sky-700"
        >
          Send Message
        </button>

        {status === "submitted" && (
          <p className="text-green-600 text-center font-medium pt-2">
            Message Sent ✔️
          </p>
        )}
      </form>
    </div>
  );
}

