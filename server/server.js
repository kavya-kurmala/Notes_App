const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notesRoutes = require("./routes/notes");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));


app.use(bodyParser.json());

app.use("/notes", notesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
