const express = require("express")
const routes = require("./routes")
const mongoose = require("mongoose")
const cors = require("cors")

const server = express();

// mongoose.connect("mongodb+srv://admin:lRcDWEmDfNcxjq0U@cluster0-r27kd.mongodb.net/omnistack8?retryWrites=true&w=majority", {
mongoose.connect("mongodb://mongo:mongo@localhost:27017/admin?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen("3333");