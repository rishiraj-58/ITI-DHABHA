const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const orderRoutes = require("./routes/orderRoutes");
const foodRoutes = require("./routes/foodRoutes");
const workingRoutes = require("./routes/workingRoutes");
let cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors());
dotenv.config()
connectDB()

app.get("/", (req, res) => {
    res.send("API is Running Successfully")
})

app.use('/api/order',orderRoutes)
app.use('/api/food',foodRoutes)
app.use('/api/working',workingRoutes)


const PORT = process.env.PORT || 5002

const server = app.listen(PORT, console.log(`Server started on PORT ${PORT}`))
