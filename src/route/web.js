/** @format */

import express from "express";
import homeController from "../Controllers/homeController";
import userController from "../Controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.editCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin, (req, res) => {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Thay đổi thành URL của trang web của bạn

    // Các dữ liệu đáp ứng của bạn
    res.json({ success: true });
  });

  router.get("/api/get-all-users", userController.handleGetAllUser);
  return app.use("/", router);
};

module.exports = initWebRoutes;
