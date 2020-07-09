const router = require("express").Router();
const employeeRoutes = require("./employees");
const customerRoutes = require("./customers");
const transactionRoutes = require("./transactions");

// employee routes
router.use("/employees", employeeRoutes);
router.use("/customers", customerRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
