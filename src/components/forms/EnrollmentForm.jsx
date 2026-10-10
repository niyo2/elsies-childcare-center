import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const initialForm = {
  parentName: "",
  email: "",
  childName: "",
  age: "",
  phone: "",
  program: "",
};

function programForAge(value) {
  if (value === "") return "";
  const age = Number(value);
  if (!Number.isInteger(age) || age < 6 || age > 24) return "";
  return age <= 17 ? "Infant (6–17 months)" : "Toddler (18–24 months)";
}

export default function EnrollmentForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setStatus("");
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "age" ? { program: programForAge(value) } : {}),
    }));
  }

  async function submit(event) {
    event.preventDefault();
    const ageMonths = Number(form.age);
    const expectedProgram = programForAge(form.age);

    if (!expectedProgram || !Number.isInteger(ageMonths)) {
      setStatus("invalid-age");
      return;
    }

    setStatus("saving");
    try {
      await addDoc(collection(db, "enrollments"), {
        ...form,
        age: ageMonths,
        ageUnit: "months",
        program: expectedProgram,
        createdAt: serverTimestamp(),
        status: "new",
      });
      setForm(initialForm);
      setStatus("done");
    } catch (error) {
      console.error("Enrollment submission failed:", error);
      setStatus("error");
    }
  }

  const fields = [
    ["parentName", "Parent/Guardian Name", "text"],
    ["email", "Email", "email"],
    ["childName", "Child's Name", "text"],
    ["phone", "Phone Number", "tel"],
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-xl font-semibold text-sky-900">
        Enrollment Interest Form
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        We welcome children ages 6 months to 2 years. Share your information
        and our team will follow up about availability and next steps.
      </p>

      <form onSubmit={submit} className="mt-5 grid gap-4 md:grid-cols-2">
        {fields.map(([name, label, type]) => (
          <label key={name} className="text-sm font-medium text-slate-700">
            {label}
            <input
              name={name}
              type={type}
              value={form[name]}
              onChange={updateField}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
            />
          </label>
        ))}

        <label className="text-sm font-medium text-slate-700">
          Child's Age (in months)
          <input
            name="age"
            type="number"
            min="6"
            max="24"
            step="1"
            value={form.age}
            onChange={updateField}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Program (assigned automatically)
          <input
            type="text"
            readOnly
            value={form.program}
            placeholder="Enter child's age first"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
          />
        </label>

        <button
          type="submit"
          disabled={status === "saving"}
          className="rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white disabled:opacity-60 md:col-span-2"
        >
          {status === "saving" ? "Submitting…" : "Submit Enrollment Interest"}
        </button>

        {status === "invalid-age" && (
          <p role="alert" className="text-red-700 md:col-span-2">
            Please enter your child's age in whole months, from 6 to 24.
          </p>
        )}
        {status === "done" && (
          <p role="status" className="text-green-700 md:col-span-2">
            Thank you. Your enrollment request was submitted.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-red-700 md:col-span-2">
            We could not submit the form. Please try again or contact the center.
          </p>
        )}
      </form>
    </div>
  );
}
