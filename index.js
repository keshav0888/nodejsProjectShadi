const express=require("express")
const app=express()
const cors=require('cors')
const {dbConnection}=require("./DB/database.js")
app.use(express.json())
app.use(cors())
// app.use(dbConnection)
app.use("/api", require("./Routes/Routes.js"));
app.listen(3001,()=>{
    console.log("Server Running")
})