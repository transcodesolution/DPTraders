import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    dpId: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'Admin Role'
    },
    lastEditPassword: {
        type: Date
    },

})

const userModel = new mongoose.model("User", userSchema);

export default userModel;