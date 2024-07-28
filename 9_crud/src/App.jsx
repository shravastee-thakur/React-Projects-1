import { useState } from "react";
import "./App.css";

function App() {
  const model = {
    fullname: "",
    class: "",
    roll: "",
    subject: "",
    dob: "",
  };
  const [editIndex, setEditIndex] = useState(null);
  const [right, setRight] = useState(-450);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(model);

  const handleDrawer = () => {
    setRight(0);
  };

  const handleClose = () => {
    setRight(-450);
    setForm(model);
    setEditIndex(null)
  };

  const handleInput = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key]: value,
    });
  };

  const createStudent = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm(model);
    setRight(-450);
  };

  const deleteStudent = (index) => {
    const backup = [...students];
    backup.splice(index, 1);
    setStudents(backup);
  };

  const editStudent = (index) => {
    setRight(0);
    setEditIndex(index);
    setForm(students[index]);
  };

  const saveStudent = (e) => {
    e.preventDefault();
    const backup = [...students];
    backup[editIndex] = form;
    setStudents(backup);
    setForm(model);
    setEditIndex(null);
    setRight(-450);
  };

  return (
    <div
      style={{
        background: "#ddd",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "70%",
          background: "#fff",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: 32,
          }}
        >
          Coding
        </h1>

        <button
          onClick={handleDrawer}
          style={{
            border: "none",
            cursor: "pointer",
            background: "orange",
            padding: "14px 32px",
            borderRadius: 5,
            color: "#fff",
            marginBottom: 24,
          }}
        >
          Add Student
        </button>

        <table className="crud-app">
          <thead>
            <tr>
              <th>Sr/No</th>
              <th>Student name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.fullname}</td>
                  <td>{student.subject}</td>
                  <td>{student.class}</td>
                  <td>{student.roll}</td>
                  <td>{student.dob}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => editStudent(index)}
                        style={{
                          border: "none",
                          background: "orange",
                          cursor: "pointer",
                          padding: "4px 22px",
                          borderRadius: 5,
                          color: "#fff",
                          marginRight: 5,
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteStudent(index)}
                        style={{
                          border: "none",
                          background: "orangered",
                          cursor: "pointer",
                          padding: "4px 15px",
                          borderRadius: 5,
                          color: "#fff",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <aside
        style={{
          position: "fixed",
          top: 0,
          right: right,
          width: 450,
          height: "100%",
          background: "orange",
          padding: 32,
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
          transition: "0.5s",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "#333",
            fontSize: 22,
            padding: 8,
            borderRadius: 4,
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          x
        </button>
        <h1>New Student</h1>

        <form
          onSubmit={editIndex === null ? createStudent : saveStudent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 20,
          }}
        >
          <input
            value={form.fullname}
            onChange={handleInput}
            required
            type="text"
            name="fullname"
            placeholder="Enter your name"
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 12,
              fontSize: 14,
            }}
          />

          <input
            value={form.class}
            onChange={handleInput}
            required
            type="number"
            name="class"
            placeholder="Enter your class"
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 12,
              fontSize: 14,
            }}
          />

          <input
            value={form.roll}
            onChange={handleInput}
            required
            type="number"
            name="roll"
            placeholder="Enter your roll no."
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 12,
              fontSize: 14,
            }}
          />

          <input
            value={form.subject}
            onChange={handleInput}
            required
            type="text"
            name="subject"
            placeholder="Enter your subject"
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 12,
              fontSize: 14,
            }}
          />

          <input
            value={form.dob}
            onChange={handleInput}
            required
            type="date"
            name="dob"
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 12,
              fontSize: 14,
            }}
          />

          {editIndex === null ? (
            <button
              style={{
                border: "none",
                cursor: "pointer",
                background: "orangered",
                color: "#fff",
                fontSize: 22,
                padding: 8,
                borderRadius: 4,
              }}
            >
              Submit
            </button>
          ) : (
            <button
              style={{
                border: "none",
                cursor: "pointer",
                background: "red",
                color: "#fff",
                fontSize: 22,
                padding: 8,
                borderRadius: 4,
              }}
            >
              Save
            </button>
          )}
        </form>
      </aside>
    </div>
  );
}

export default App;
