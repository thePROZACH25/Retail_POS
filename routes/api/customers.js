const router = require("express").Router();
const customerController = require("../../controllers/customerController");

// Matches with "/api/customers"
router.route("/")
  .get(customerController.findAll)
  .post(customerController.create);

// Matches with "/api/customers/:id"
router
  .route("/:id")
  .get(customerController.findById)
  .put(customerController.update)
  .delete(customerController.remove);

module.exports = router;
