var express = require("express");
var router = express.Router();

const controller = require("../../controllers/user.controller");
const deleteUserRouter = require("./deleteRouters/deleteUser.router");
const showUserRouter = require("./showRouters/showUser.router");
const createUserRouter = require("./showRouters/createUser.router");

router.get("/", controller.findAll);

router.use("/postUser", createUserRouter);
    
    router.use("/searchUser", showUserRouter);

    router.use("/deleteUser", deleteUserRouter);
    

module.exports = router;