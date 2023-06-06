const express = require("express")
const app = express()
const mongoose = require ("mongoose")
require("dotenv").config()
const cors = require('cors')
app.use(cors())
app.use(express.static("uploads"))
app.use('/uploads', express.static('uploads'));

app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("Db Connected");
})

const settingRouter = require("./routes/setting.routes")
app.use("/setting", settingRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server Run ${process.env.PORT}`)
})