import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/DPtraders', { useNewUrlParser: true,
    useUnifiedTopology: true, }).then(() => {
    console.log("conection sucsesfull.")
}).catch((err) => {
    console.log(err);
});





