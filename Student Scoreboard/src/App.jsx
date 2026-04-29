import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Tarun", score: 85 },
    { id: 2, name: "Kritarth", score: 89 },
    { id: 3, name: "Khushi", score: 90 },
    { id: 4, name: "Jatin", score: 78 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((acc, s) => acc + s.score, 0) / total
        );

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div>Total: {total}</div>
        <div>Passed: {passed}</div>
        <div>Avg Score: {avg}</div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;