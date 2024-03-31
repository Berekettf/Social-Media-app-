const express = require("express");
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv= require('dotenv')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()
mongoose.connect('mongodb://localhost:27017/Zigu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))


//middle
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.listen(8000, ()=>{
    console.log('Backend server is running!')
})