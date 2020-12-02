const GOOGLE_API_KEY = "AIzaSyDitj8NGVPS-6rkU9dwiDtK-mKtAcaTAjE";

const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
const db = require("./models");

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("/api/books", (req, res) => {
  db.Book.find({}, (err, dbBooks) => {
    if (err) res.status(404).json(err);
    else res.json(dbBooks);
  });
});

app.post("/api/books", (req, res) => {
  db.Book.create(req.body, (err, dbBooks) => {
    if (err) res.status(404).json(err);
    else res.status(200).json(dbBooks);
  });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.findOneAndDelete({ _id: req.params.id }, (err, dbBooks) => {
    if (err) res.status(404).json(err);
    else res.status(200).json(dbBooks);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
