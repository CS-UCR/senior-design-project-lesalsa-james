const express = require("express");
const {accessChat} = require("../controllers/chatControllers")
const router = express.Router();
const {protect} = require ("../middleware/authMiddleware")

router.route("/").post(protect, accessChat);
// router.route("/").get(fetchChats);
// router.route("/group").post(createGroupChat);
// router.route("/rename").put(renameGroup);
// router.route("/remove").put(removefromGroup);
// router.route("/add").put(addtoGroup);

module.exports = router;