const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const userRouter = require("./routers/userRouter.js");

app.use(cors());
app.use(express.json()); // Ensure only JSON is parsed for POST/PUT, not GET
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});