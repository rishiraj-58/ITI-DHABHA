const mongoose = require("mongoose");

const foodModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    price: { type: Number },
    offerPrice: { type: Number },
    isVeg: { type: Boolean, default: true },
    pic: {
        type: "String",
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
    availability: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodModel);

module.exports = Food;