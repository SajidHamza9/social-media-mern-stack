const router = require("express").Router();
const msgController = require("../../controller/message.controller");

router.post("/", msgController.createMessage);
router.get("/:convId", msgController.getMessages);
module.exports = router;
