const express = require("express")
const { foodMenu, fetchFood } = require("../controllers/foodControllers")

const router = express.Router()

router.route('/').post(foodMenu)
router.route('/').get(fetchFood)

module.exports = router