const router=require('express').Router();
const authcontroller=require("../controller/authController")
router.post("/login",authcontroller.loginController);
router.post("/signup",authcontroller.signupController);
 router.get("/refresh",authcontroller.refreshAccessTokenController);
 router.post("/logout",authcontroller.logoutController);
module.exports=router;