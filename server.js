const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const userRouter = require("./routers/userRouter.js");
const servicesRouter = require("./routers/servicesRouter.js");

app.use(cors());
app.use(express.json()); 
app.use("/users", userRouter);
app.use("/services", servicesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});