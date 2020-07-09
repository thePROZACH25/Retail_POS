const router = require("express").Router();
const employeeRoutes = require("./employees");
const customerRoutes = require("./customers")

// employee routes
router.use("/employees", employeeRoutes);
router.use("/customers", customerRoutes)

module.exports = router;
