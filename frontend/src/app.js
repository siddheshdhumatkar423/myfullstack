import { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', email: '' });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3001/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <form className="bg-white p-4 rounded shadow w-full max-w-sm mx-auto mb-8" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <input
          className="w-full border p-2 mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-4"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
      </form>

      <div className="max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        <ul className="bg-white p-4 rounded shadow">
          {users.map((user) => (
            <li key={user.id} className="border-b py-1">
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
