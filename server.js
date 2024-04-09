const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

//load env vars
dotenv.config({ path: "./config/config.env" });

// Route file
const bootcamps = require("./routes/bootcamps");

connectDB();
const app = express();
const PORT = process.env.PORT;

app.use("/api/v1/bootcamps", bootcamps);

const server = app.listen(PORT, () => {
  console.log(
    `the server running in mode ${process.env.NODE_ENV} on port ${PORT}`.yellow
      .bold
  );
});

// unhandled Rejection promise when authentication failled

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:, ${err.message}`.red);

  //close server and exit
  server.close(() => process.exit());
});
