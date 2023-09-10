const express = require("express");

const router = express.Router();

const { Infocontrollers } = require("../../controllers");

router.get("/info", Infocontrollers.info);

module.exports = router;
