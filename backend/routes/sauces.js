const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauces");

router.get("/", auth, sauceCtrl.getAllStuff);

module.exports = router;
