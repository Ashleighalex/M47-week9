const express = require ("express");
// This allows to setup a HTTP server
const cors = require("cors")
require("dotenv").config();
// This allows to store enviroment variables in the .env file
const app = express();
// This allows us to rename express to app

app.use(cors()) // enable request from any origin

const port = process.env.PORT;

const userRouter = require("./users/routes");

app.use(express.json());
// This tells the server to expect JSON to be used in the request BODY rather than the XML

app.use(userRouter);

app.get ("/health", (req,res) => {
    res.status(200).send({message: "api is working"})
})
// This a health check route so that we can check our server is working

require("./db/connection");


app.listen (port, () => {
    console.log(`Server is listening on port ${port}`)
})
// The listen method listens in on the requested port for HTTP requests and if it successfully starts listening it will run the function we have setup to console log that it has started.