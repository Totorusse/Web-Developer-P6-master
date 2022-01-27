const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauces");

router.get("/", auth, multer, sauceCtrl.getAllSauces);
router.post("/", auth, multer, sauceCtrl.newSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/:id/like", auth, sauceCtrl.like);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);

module.exports = router;
