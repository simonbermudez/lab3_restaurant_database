const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const dotenv = require("dotenv")
dotenv.config()

PORT = 3000

const app = express();

app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/restaurants', restaurantRouter);

app.listen(PORT, () => { console.log(`Server is running in port ${PORT}...`) });