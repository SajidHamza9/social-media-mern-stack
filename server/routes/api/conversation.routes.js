const router = require("express").Router();
const convController = require("../../controller/conversation.controller");

router.post("/", convController.createConversation);
router.get("/:id", convController.getConversations);
router.get("/:id1/:id2", convController.getOneConv);
module.exports = router;
