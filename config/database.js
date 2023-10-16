const mongoose = require("mongoose")

require("dotenv").config() // isse humm jo bhi .env mai likha hai usse process mai load kr denge

const connectWithDb = () => { // iss function kaa kaam hai db and application ko connect krna
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB ka connection is successful"))
        .catch((error) => {
            console.log("Issue in DB Connection")
            console.error(error);
            process.exit(1)
        })
}


module.exports = connectWithDb