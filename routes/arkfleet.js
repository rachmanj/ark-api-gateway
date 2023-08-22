const express = require("express");
const router = express.Router();

const arkfleetHandler = require("./handler/arkfleet");

/* GET users listing. */
router.get("/", arkfleetHandler.getAll);
module.exports = router;
