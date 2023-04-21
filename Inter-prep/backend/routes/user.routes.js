const express = require('express')
const userRouter = express.Router();
const { UserModel } = require('../models/user.model');


userRouter.get("/", async (req, res) => {
    try {
        res.json({ message: "Hello World!" })
    }
    catch (err) {
        console.log(err)
        res.json({ error: "Something went wrong" })
    }
})

userRouter.get('/get', async (req, res) => {
    try {
        const userData = await UserModel.find();
        res.send(userData);
    }
    catch (err) {
        console.log(err)
        console.log('Something went wrong')
    }
})

userRouter.post('/register', async (res, req) => {
    const { name, email, password, number } = res.body;
    try {
        const user = new UserModel({ name, email, password, number });
        await user.save();
    }
    catch (err) {
        console.log(err)
        // res.send("user not registered")
    }
    console.log()
})

module.exports = { userRouter };
