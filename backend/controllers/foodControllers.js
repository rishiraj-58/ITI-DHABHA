const asyncHandler = require('express-async-handler')
const Food = require("../models/foodModel")

const foodMenu = asyncHandler(async(req,res) => {
    const { name, price, isVeg, offerPrice, availability } = req.body

    const food = await Food.create({
        name,
        price,
        isVeg,
        offerPrice,
        availability
    })

    if(food){
        res.status(201).json({
            _id: food._id,
            name: food.name,
            price: food.price,
            isVeg: food.isVeg,
            offerPrice: food.offerPrice,
            availability: food.availability   
        })
    } else {
        res.status(400)
        throw new Error("Failed to make the menu")
    }
})

const fetchFood = asyncHandler(async (req,res) => {
    try {
        const food = await Food.find()
        res.status(200).json(food);
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

module.exports = { foodMenu, fetchFood }