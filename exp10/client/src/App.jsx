import { useState, useEffect } from "react";
import StudentCard from "./StudentCard.jsx";

function App() {
  // state: when any of these change, React re-renders the component
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // runs once after the first render: fetch data from the Express API
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => {
        if (!res.ok) throw new Error("Server error " + res.status);
        return res.json();
      })
      .then((data) => setStudents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const shown = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "2rem auto" }}>
      <h2>Student List (React + Node API)</h2>
      <input placeholder="Search name" value={search} onChange={(e) => setSearch(e.target.value)} />
      {shown.map((s) => (
        <StudentCard key={s.id} name={s.name} branch={s.branch} cgpa={s.cgpa} />
      ))}
      <p>Showing {shown.length} of {students.length}</p>
    </div>
  );
}

export default App;
