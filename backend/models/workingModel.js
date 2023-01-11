const mongoose = require("mongoose");

const workingModel = mongoose.Schema(
  {
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Working = mongoose.model("working", workingModel);

module.exports = Working;