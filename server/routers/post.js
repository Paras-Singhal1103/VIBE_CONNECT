const router=require('express').Router();
const postController=require('../controller/postcontroler');
const requiredUser = require('../middlewares/requiredUser');

router.post("/",requiredUser,postController.createPostController);
router.post("/like",requiredUser,postController.likeAndUnlikePost);
router.put("/",requiredUser,postController.updatePostController);
router.delete("/",requiredUser,postController.deletePost);
module.exports=router;