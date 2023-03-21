const UserModel = require('../model/User');

const adduser = async (req, res) => {
    try {
        const user = await new UserModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city
        })
        const userdata = await user.save()
        res.status(201).json({ success: true, message: "user added successfully...", data: userdata })
    } catch (err) {
        res.status(404).json(message.err)
    }
}

const getuser = async (req, res) => {
    try {
        const alluser = await UserModel.find()
        res.status(200).json({ success: true, message: "Get all Users successfully...", data: alluser })
    } catch (err) {
        res.status(404).json(message.err)
    }

}

module.exports = {
    adduser,
    getuser
}