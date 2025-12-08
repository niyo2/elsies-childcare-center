import React, { useState } from "react";

export default function EnrollmentForm() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    age: "",
    phone: "",
    program: "",
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
        age: "",
        phone: "",
        program: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-2xl">
      <h2 className="text-xl font-semibold text-sky-900 mb-4">
        Enrollment Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Parent/Guardian Name</label>
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
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Child’s Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
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
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Program Interested In</label>
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select...</option>
            <option value="Infant">Infant (6–18 months)</option>
            <option value="Toddler">Toddler (18–36 months)</option>
            <option value="Preschool">Preschool (3–5 years)</option>
            <option value="Overnight">Overnight Care</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-700"
        >
          Submit Enrollment
        </button>

        {status === "submitted" && (
          <p className="text-green-600 text-center font-medium pt-2">
            Enrollment Submitted ✔️
          </p>
        )}
      </form>
    </div>
  );
}

