const express = require('express');
const {registerUser, authUser, allUsers, updateUser, getAllUsers} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router()



router.route('/').post(registerUser).get(protect, allUsers);
// router.route('/').post(registerUser).get(allUsers);
router.route('/').get(getAllUsers);
router.post('/login', authUser);
router.post('/update', updateUser);
// router.route('/update').post(protect,updateUser);



module.exports = router;