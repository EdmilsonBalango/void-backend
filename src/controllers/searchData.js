const express = require('express')
const collection = require('../database')
const rounter = express.Router()


rounter.post('/', async (req,res) => {
    const {query} = req.body


    const findResult = await collection.find({name: new RegExp(query) }).toArray();

    return res.json(findResult)
})

module.exports = app => app.use('/searchData', rounter)