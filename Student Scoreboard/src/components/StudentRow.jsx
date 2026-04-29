import React, { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const status = student.score >= 40 ? "PASS" : "FAIL";

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td className={status === "PASS" ? "pass" : "fail"}>
        {status}
      </td>
      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, newScore)}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;