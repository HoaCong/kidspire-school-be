const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3101;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Deploy success 1!" });
});

app.post("/login", async (req, res) => {
  try {
    const response = await axios.post(process.env.API_BE + "/login", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while making the request" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.API_BE + "/register",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while making the request" });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
