/** @format */

import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web";
import viewEngine from "./config/viewEngine";
import connectDB from "./config/connectDB";
const cors = require("cors");
require("dotenv").config();

let app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Thay đổi thành URL của trang web của bạn
    credentials: true,
  })
);

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is runing on the port " + port);
});
