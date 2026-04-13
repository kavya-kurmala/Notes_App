const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all notes
router.get("/", (req, res) => {
  const notes = db.prepare("SELECT * FROM notes").all();
  res.json({ success: true, data: notes });
});

// GET single note
router.get("/:id", (req, res) => {
  const note = db
    .prepare("SELECT * FROM notes WHERE id = ?")
    .get(req.params.id);

  res.json({ success: true, data: note });
});

// CREATE note
router.post("/", (req, res) => {
  const { title, content } = req.body;

  const result = db
    .prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
    .run(title, content);

  res.json({ success: true, id: result.lastInsertRowid });
});

// UPDATE note
router.put("/:id", (req, res) => {
  const { title, content } = req.body;

  db.prepare(
    "UPDATE notes SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
  ).run(title, content, req.params.id);

  res.json({ success: true });
});

// DELETE note
router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM notes WHERE id = ?").run(req.params.id);
  res.json({ success: true });
});

module.exports = router;
