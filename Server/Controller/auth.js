import userModel from "../Database/Model/admin.js"
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { id, password } = req.body;
    try {
        let user = await userModel.find();
        user=user[0]
        console.log(user.dpId == id && user.password == password)
        if (user.dpId == id && user.password == password) {

            const token = jwt.sign({ id: user.dpd }, process.env.JWT_SECRET);
            res.status(200).json({ token, user });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}