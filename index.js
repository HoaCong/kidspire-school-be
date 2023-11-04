const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3101;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Deploy success!" });
});

app.post("/login", async (req, res) => {
  console.log(1111111);
  try {
    const response = await axios.post(process.env.API_BE + "/login", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while making the request" });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});