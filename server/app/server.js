const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { userRoutes } = require("./routes");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
