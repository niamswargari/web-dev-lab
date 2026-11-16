// Child component: receives data through props (read-only)
function StudentCard({ name, branch, cgpa }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 8, borderRadius: 6 }}>
      <h3>{name}</h3>
      <p>Branch: {branch} | CGPA: {cgpa}</p>
    </div>
  );
}

export default StudentCard;
