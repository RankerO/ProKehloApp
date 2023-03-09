const express = require("express");
const { allUsers } =require("../Controllers/userController")
const {
    authUser,
    registerUser,
    updateUserProfile,
} = require("../Controllers/userController");
// const protect =require("../middleware/authMiddleware.js");  
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").put( updateUserProfile);
router.route("/alluser").get(allUsers);

module.exports=router;
