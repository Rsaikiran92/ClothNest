const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  wishlist: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    },
  ],
});

const userModel = mongoose.model("users", userSchema);

exports.userModel = userModel;
