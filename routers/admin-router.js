const express= require('express');
const router= express.Router();
const adminController= require("../controller/adminController");

router.router("/login")
    .get(adminController.getLogin)
    .post(adminController.login)


module.exports= router