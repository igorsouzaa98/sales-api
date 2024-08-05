import express from "express";
import products from "./productsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("Server is running...");
  });

  app.use(express.json(), products, users);
};

export default routes;
