const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("hello world");
  });
}

main()
  .then(() => console.log("mongoDB connect successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server is running ");
});
