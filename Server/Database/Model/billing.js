import mongoose from "mongoose";

const Billingschema = mongoose.Schema({
    recipient: {
        type: String,
        required: true,

    },
    address: {
        type: String,

    },
    challan: {
        type: Number,
        required: true,
        validate(data) {
            typeof data === Number
        },
    },
    billCreationDate: {
        type: String,
        required: true,
    },

    billItems: {
        type: Object,
        require: true

    }
})
const billingModel = new mongoose.model("bills", Billingschema);

export default billingModel