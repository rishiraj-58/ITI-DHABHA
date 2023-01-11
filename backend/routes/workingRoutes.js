const express = require("express")
const { working, isWorking } = require("../controllers/workingControllers")

const router = express.Router()

router.route('/').post(working)
router.route('/').get(isWorking)

module.exports = router