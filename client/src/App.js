import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const API = "https://notes-backend-tdfv.onrender.com";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setNotes(data.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const saveNote = async () => {
    if (!title) return alert("Title required");

    if (selectedId) {
      await fetch(`${API}/${selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
    }

    setTitle("");
    setContent("");
    setSelectedId(null);
    fetchNotes();
  };

  const editNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setSelectedId(note.id);
  };

  const deleteNote = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  const filteredNotes = notes.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const theme = {
    background: dark ? "#1e1e1e" : "#f5f7fa",
    text: dark ? "#fff" : "#000",
    card: dark ? "#2c2c2c" : "#fff"
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: theme.background,
      color: theme.text,
      fontFamily: "Arial"
    }}>

      {/* Sidebar */}
      <div style={{
        width: "25%",
        padding: "15px",
        borderRight: "1px solid gray"
      }}>
        <h2>📝 Notes</h2>

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>

        <br /><br />

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />

        <br /><br />

        <button onClick={() => {
          setTitle("");
          setContent("");
          setSelectedId(null);
        }}>
          + New Note
        </button>

        {filteredNotes.map((note) => (
          <div key={note.id} style={{
            marginTop: "10px",
            padding: "10px",
            background: theme.card,
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h4>{note.title}</h4>

            <button onClick={() => editNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)} style={{ marginLeft: "5px" }}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Editor */}
      <div style={{ width: "35%", padding: "20px" }}>
        <h3>✏ Editor</h3>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        />

        <textarea
          placeholder="Write markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            height: "60%",
            padding: "10px",
            borderRadius: "5px"
          }}
        />

        <button
          onClick={saveNote}
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Save
        </button>
      </div>

      {/* Preview */}
      <div style={{
        width: "40%",
        padding: "20px",
        borderLeft: "1px solid gray",
        background: theme.card
      }}>
        <h3>👀 Preview</h3>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
