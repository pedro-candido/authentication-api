import { Schema } from "mongoose";
import { Crypt } from "../Utils/crypt";

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  username: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    max: 11,
    unique: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const user = this;

  const newPassword = await new Crypt().cryptPassword(user.password);

  user.password = newPassword;
  next();
});

export default userSchema;
