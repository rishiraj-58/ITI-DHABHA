const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    phoneNumber: { type: "Number",  required: true },
    address: { type: "String",  required: true },
    orders: { type: "String",  required: true },
    payment: { type: "Number",  required: true }
  },
  { timestaps: true }
);

const Order = mongoose.model("Order", orderSchema)

module.exports = Order
