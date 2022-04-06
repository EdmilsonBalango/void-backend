const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')



const port = 5000
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



require('./controllers/setData')(app)
require('./controllers/getData')(app)
require('./controllers/deleteData')(app)
require('./controllers/searchData')(app)



app.listen(port, () => console.log('server started in ' + port))