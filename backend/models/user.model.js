import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,

  },
  cartItems: [{
    quantity: {type: Number,
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    default: 1,
  },
  
  },
],
  role: {
    type: String,
    enum: ["costumer", "admin"],
    default: "costumer",
  },
}, {
  timestamps: true,
});

const user = mongoose.model("User", userSchema);

 export default user

