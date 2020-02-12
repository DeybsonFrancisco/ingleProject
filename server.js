require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const routes = require("./src/routes");

// app.use(express.urlencoded());
app.use(express.json());

routes(app);

app.listen(port);
console.log(`rodando na porta: ${port}`);
