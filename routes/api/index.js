const router = require("express").Router();
const employeeRoutes = require("./user");
const customerRoutes = require("./customers");
const transactionRoutes = require("./transactions");
const productRoutes = require("./products");

// Database routes
router.use("/employees", employeeRoutes);
router.use("/customers", customerRoutes);
router.use("/transactions", transactionRoutes);
router.use("/products", productRoutes);

module.exports = router;
