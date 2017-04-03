'use strict';
const express= require("express");
const router= express.Router();
const apiController= require("../controller/apiController");
router.get("/users", apiController.getUsers);
router.post("/user",apiController.createUser);

module.exports= router;