import { pool } from "../db.js";

const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
const getUser = async (req, res) => {
  const { userName, password } = req.body;
  const [rows] = await pool.query("SELECT * FROM user WHERE userName = ?", [
    userName,
  ]);
  if (rows.length <= 0) {
    return res.status(404).json({ message: "user not found" });
  } else if (rows[0].password != password) {
    return res.send("password incorrect");
  }

  res.json(rows[0]);
  //res.send(`your user: ${userName} and your password: ${password}`);
};

const authUser = async (req, res) => {
  const { userName, password } = req.body;
  const [rows] = await pool.query("SELECT * FROM user WHERE userName = ?", [
    userName,
  ]);
  if (rows.length <= 0) {
    return res.status(404).json({ message: "user not found" });
  } else if (rows[0].password != password) {
    return res.send("password incorrect");
  }

  res.json(rows[0]);
};
const postUser = async (req, res) => {
  const { userName, password } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO user (userName, password) VALUES (?, ?)",
    [userName, password]
  );
  //console.log(req.body);
  //res.send("post route");
  res.status(201).json({ id: rows.insertId, userName, password });
};
const putUser = (req, res) => res.send("post rout");
const deleteUser = (req, res) => res.send("post rout");
export { getUser, postUser, putUser, deleteUser, getUsers, authUser };
