const asyncHandler = require('express-async-handler')
const Order = require("../models/orderModel")

const takeOrder = asyncHandler(async(req,res) => {
    const { name, phoneNumber, address, hostal, orders, payment } = req.body

    const order = await Order.create({
        name,
        phoneNumber,
        address,
        hostal,
        orders,
        payment
    })

    if(order){
        res.status(201).json({
            _id: order._id,
            name: order.name,
            phoneNumber: order.phoneNumber,
            address: order.address,
            hostal: order.hostal,
            orders: order.orders,
            payment: order.payment,    
        })
    } else {
        res.status(400)
        throw new Error("Failed to place the order")
    }
})

module.exports = { takeOrder }