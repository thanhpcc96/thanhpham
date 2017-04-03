'use strict';
const express= require("express");
const router= express.Router();
const homeController= require("../controller/controller");
// bắt các router trỏ về controller


router.get("/",homeController.getIndex);

/*
** thiet ke API
*/



module.exports=router;