const express = require('express');
const app = express();
const cors = require('cors');
const { connection } = require('mongoose');
const { userRouter } = require('./routes/user.routes');
require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin: "*"
}))

app.use("/api", userRouter)


app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log("Server is connection to DB")
    }
    catch (err) {
        console.log(err);
        console.log('Something went wrong')
    }
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

























// const express = require('express');
// const app = express();
// const { connection } = require('./config/db')
// const cors = require('cors');
// require("dotenv").config();

// app.use(express.json())
// app.use(cors({
//     origin: "*"
// }))

// app.get("/", (req, res) => {
//     res.send("Homepage")
// })
// app.get("/about", (req, res) => {
//     res.json({
//         name: "Sourav",
//         email: "sourav@gmail.com",
//         password: "password"
//     })
// })

// app.listen(process.env.PORT, async (req, res) => {
//     try {
//         await connection
//         console.log("Server is connected to DB")
//     }
//     catch (err) {
//         console.log(err);
//         console.log("Something went wrong");
//     }
//     console.log(`server is running on PORT ${process.env.PORT}`)
// })
