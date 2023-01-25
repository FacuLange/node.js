const express = require('express')
const app = express()
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require("path")
require('ejs')

const HomeRoutes = require('../routes/home')



app.set('port', 3000)
app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views' ))
app.use(HomeRoutes)

 console.log("hola")

 console.log("Server on port 3000")
app.listen(app.get('port'));

