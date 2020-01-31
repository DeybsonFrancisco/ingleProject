const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const Youch = require('youch')

const routes = require('./routes')

//app.use(express.urlencoded())
app.use(express.json())

routes(app);

app.listen(port);
console.log("rodando porta 3000")