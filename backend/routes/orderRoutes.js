const express = require("express")
const { takeOrder } = require("../controllers/orderControllers")

const router = express.Router()

router.route('/').post(takeOrder)

module.exports = router