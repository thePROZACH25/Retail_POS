const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");

// Matches with "/api/transactions"
router.route("/")
  .get(transactionController.findAll)
  .post(transactionController.create);

// Matches with "/api/transactions/:id"
router
  .route("/:id")
  .get(transactionController.findById)
  .put(transactionController.update)
  .delete(transactionController.remove);

module.exports = router;
