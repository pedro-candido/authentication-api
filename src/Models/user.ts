import mongoose from "mongoose";
import Schema from "../Schemas/user-schema";

const Model = mongoose.model("User", Schema);

export default Model;
