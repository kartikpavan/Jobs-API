require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect.js");
// Routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
   res.send("Welcome to jobs api ");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
const start = async () => {
   try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => {
         console.log(`Listening on PORT ${PORT}..`);
      });
      console.log("Connection to DB successful");
   } catch (error) {
      console.log(error);
   }
};

start();
