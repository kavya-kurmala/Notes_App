# 📝 Markdown Notes App

## 📌 Overview

This is a simple full-stack Notes application where users can create, edit, and manage notes using Markdown.
It also provides a live preview so users can instantly see how their formatted content looks.

The focus of this project is on functionality, clean structure, and usability rather than heavy UI design.

---

## 🚀 Features

* Create, edit, and delete notes
* Write notes using Markdown syntax
* Live split-screen preview (editor + output)
* Notes are saved in a database (persistent storage)
* Search notes by title
* Dark mode toggle for better user experience

---

## 🛠 Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js (Express)
* **Database:** SQLite
* **Markdown Rendering:** react-markdown

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd notes-app
```

---

### 2. Backend Setup

```bash
cd server
npm install
node server.js
```

The backend will run on:
`http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd client
npm install
npm start
```

The frontend will run on:
`http://localhost:3000`

---

## 🧪 How to Use

* Click **+ New Note** to create a note
* Write content using Markdown in the editor
* See the formatted output in real time on the right
* Use **Edit** to modify a note
* Use **Delete** to remove a note
* Use the **Search bar** to quickly find notes

---

## 🎯 Design Decisions

* Used SQLite for simplicity and quick setup
* Used a split-screen layout for better editing experience
* Kept UI minimal and focused on usability
* Chose synchronous database operations for simplicity and reliability

---

## ⚠️ Limitations

* Search works only on note titles (can be extended to full-text search)
* No authentication (kept simple for assignment scope)

---

## 📽 Demo

A short demo video is included in the submission showing all features and explaining the structure.

---

## 🙌 Final Note

This project was built as part of an assignment with a focus on problem-solving, clean structure, and delivering a complete working product within a limited time.

---
