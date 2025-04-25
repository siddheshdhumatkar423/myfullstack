import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Submitted!');
    setForm({ name: '', email: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">User Form</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 mb-4 w-full"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
