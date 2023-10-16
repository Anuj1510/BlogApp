const express = require("express")
const app = express()


// load config from env file
require("dotenv").config()
const PORT = process.env.PORT || 4000 // ya to port mera procees se aayega nahi to 4000 ho jaayega

// middleware to parse json request body
app.use(express.json())


// import routes for TODO API
const blogs = require("./routes/blog")

// mount the todo API routes
app.use("/api/v1",blogs)


// start server
app.listen(PORT,() =>{
    console.log(`Server started succefully at ${PORT}`)
})

// connection to the database
const connectWithDb = require("./config/database")
connectWithDb()



// default Route
app.get("/",(req,res) => {
    res.send(`<h1> This is HOMEPAGE abby</h1>`)
})