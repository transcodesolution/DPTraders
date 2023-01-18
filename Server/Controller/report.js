import billingModel from "../Database/Model/billing.js"
import moment from "moment/moment.js"
const today = moment().startOf('day')

export const dailyData = async (req, res) => {
    console.log(today.format("YYYY-MM-DD"),moment(today).endOf('day').format("YYYY-MM-DD"))
    try {
        let data = await billingModel.where("billCreationDate").gte(today.format("YYYY-MM-DD")).lte(moment(today).endOf('day').format("YYYY-MM-DD"))
        console.log(data)
        res.status(200).json("data")

    } catch (error) {
console.log(error)
    }
}