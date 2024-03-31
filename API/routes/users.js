const router= require('express').Router();
const User=require('../models/user')

router.post('/', (req, res)=>{
    res.send('it is use')
})


module.exports= router