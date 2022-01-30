const express = require("express");
const {accessChat, fetchChats, createGroupChat, renameGroup, addtoGroup, removefromGroup} = require("../controllers/chatControllers")
const router = express.Router();
const {protect} = require ("../middleware/authMiddleware")

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/remove").put(protect, removefromGroup);
router.route("/add").put(protect, addtoGroup);

module.exports = router;