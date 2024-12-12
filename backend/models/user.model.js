import mongoose from "mongoose";
import bcrypt from "bcryptjs"

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
// pre-save hook to hash password before saving to database
 user.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
  }

 });

 user.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
 };

  export default user


 