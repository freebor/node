require('dotenv').config()
const express = require('express');
const cors = require('cors');

const corsOptions ={
    origin : "*",
    credentials: true,
    optionSuccessStatus:200
}

const app = express();
const userRoute = require("./Routes/userRoute")
const connectDB = require("./Db/connect")
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/books', userRoute)

const PORT = process.env.PORT || 5005

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, ()=>{
            console.log(`Server listening on Port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()