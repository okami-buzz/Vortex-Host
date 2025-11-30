const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");

const env = require("./env");
const router = require("./router");
const initWS = require("./websocket");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(router);

const server = http.createServer(app);
const wss = initWS(server);

server.listen(env.PORT, () => console.log(`Omega Tier running on ${env.PORT}`));
