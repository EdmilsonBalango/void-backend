const express = require('express')
const collection = require('../database')
const rounter = express.Router()


rounter.post('/', async (req,res) => {
    const {name_user, phone} = req.body


    const insertResult = await collection.insertOne({name: name_user, phone: phone });
    console.log('Inserted documents =>', insertResult);
    return res.json({userId: insertResult.insertedId})
})

module.exports = app => app.use('/setData', rounter)