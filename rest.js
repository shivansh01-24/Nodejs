import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.send("Done")
});

app.get("/users", async (req, res) => {
  await pool.query("SELECT * FROM users");
  res.send("Done")
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await pool.query(
    "UPDATE users SET name = $1 WHERE id = $2",
    [name, id]
  );
  res.send("Done")
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query(
    "DELETE FROM users WHERE id = $1",
    [id]
  );
  res.send("Done")
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
