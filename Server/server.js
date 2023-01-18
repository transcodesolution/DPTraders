import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 8000;
import billingModel from './Database/Model/billing.js'
import authRoutes from './Routes/authRoutes.js'
import mongoose from "mongoose";
import dotenv from "dotenv";
import reportRoutes from "./Routes/reportRoute.js";
dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/DPtraders', { useNewUrlParser: true,
    useUnifiedTopology: true, }).then(() => {
    console.log("conection sucsesfull.")
}).catch((err) => {
    console.log(err);
});
console.log(billingModel)
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth", authRoutes);
app.use("/report",reportRoutes)
app.get('/', (req, res) => {
    console.log('Server Got First Request');
})

app.post('/save_bill', async (req, res) => {
    // const { recipient, address, challan, billCreationDate, billItems } = req.body;
    // console.log(req.body);
    const bill = new billingModel(req.body);
    await bill.save().then(() => {
        res.status(201).send("Bill is Saved In Database");
    }).catch((err) => {
        res.status(400).send(`error is ${err}`)
        // console.log("error accured")
        console.log(err)

    });

})



app.get('/get_data_by_date', async (req, res) => {
    try {
        const data = await billingModel.find();

        let sendData = [];
        let arr = [data[0]];
        for (let i = 1; i < data.length; i++) {
            if (new Date(data[i].billCreationDate).getDate() == new Date(arr[0].billCreationDate).getDate()) {
                arr.push(data[i]);

            } else {
                sendData.push(arr);
                arr = [data[i]];
            }
        }
        sendData.push(arr);
        res.send(sendData);
    } catch (error) {

    }
})

app.get('/get_singleBill:id', async (req, res) => {
    const _id = req.params.id;
    console.log(_id)
    try {
        const data = await billingModel.findById(_id)
        res.send(data);
    } catch (error) {

    }
})
// async function saveAdmin() {
//     console.log('inside')
//     let user=new userModel({
//        dpId:'dp_traders_262002',
//        password:'dp_traders_262002',
//     })
//     await user.save()
// }
// saveAdmin()
app.listen(port, () => {
    console.log('server is responsing to port 8000')
})