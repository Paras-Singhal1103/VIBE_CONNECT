const userController = require('../controller/userController');
const requiredUser = require('../middlewares/requiredUser');
const router=require('express').Router();



router.post("/follow",requiredUser,userController.followOrUnfollowUserController);
router.get("/getFeedData",requiredUser,userController.getPostsOfFollowing);
router.get("/getMyPosts",requiredUser,userController.getMyPosts);
router.get("/getUserPosts",requiredUser,userController.getUserPosts);
router.delete("/",requiredUser,userController.deleteMyProfile);
router.get("/getMyInfo",requiredUser,userController.getMyInfo);
router.put("/",requiredUser,userController.updateUserProfile);
router.post("/getUserProfile",requiredUser,userController.getUserProfile);

module.exports=router;