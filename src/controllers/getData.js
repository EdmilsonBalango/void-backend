const express = require('express')
const collection = require('../database')
const rounter = express.Router()


rounter.post('/', async (req,res) => {
    const {userID} = req.body


    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return res.json(findResult)
})

module.exports = app => app.use('/getData', rounter)