import React, {useState} from 'react';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import Contact from "./Contact";


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "enrollments"), {
      parentName,
      childName,
      childAge,
      email,
      phone,
      schedulePreference,
      notes,
      submittedAt: Timestamp.now()
    });

    alert("Enrollment submitted successfully!");
  } catch (err) {
    console.error(err);
    alert("Error submitting enrollment.");
  }
};



export default function Enrollment(){
  const [form, setForm] = useState({parentName:'', childName:'', age:'', email:'', phone:''});
  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => { e.preventDefault(); alert('Thanks — form submitted (local demo). We will connect this to Firebase).'); };
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Enrollment</h1>
      <form onSubmit={submit} className="grid gap-3 max-w-xl">
        <input name="parentName" onChange={handle} value={form.parentName} placeholder="Parent/Guardian Name" className="p-2 border rounded"/>
        <input name="childName" onChange={handle} value={form.childName} placeholder="Child's Name" className="p-2 border rounded"/>
        <input name="age" onChange={handle} value={form.age} placeholder="Child's Age" className="p-2 border rounded"/>
        <input name="email" onChange={handle} value={form.email} placeholder="Email" className="p-2 border rounded"/>
        <input name="phone" onChange={handle} value={form.phone} placeholder="Phone" className="p-2 border rounded"/>
        <button className="px-4 py-2 bg-[#7C3AED] text-white rounded">Submit Enrollment</button>
      </form>
    </section>
  );
}
