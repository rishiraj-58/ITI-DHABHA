const asyncHandler = require('express-async-handler')
const Work = require("../models/workingModel")

const working = asyncHandler(async(req,res) => {
    const { isAvailable } = req.body

    const available = await Work.create({
        isAvailable
    })

    if(available){
        res.status(201).json({
            _id: available._id,
            available: available.isAvailable   
        })
    } else {
        res.status(400)
        throw new Error("Failed")
    }
})

const isWorking = asyncHandler(async (req,res) => {
    try {
        const working = await Work.find()
        res.status(200).json(working);
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

module.exports = { working, isWorking }