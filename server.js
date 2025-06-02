const http = require('http');
const path = require('path');
const fs = require('fs');
const frPromises = require('fs').promises;

const logEvenets = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {};

const MyEmitter = new Emitter();

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    console.log(req.url.url, req.method);

});

server.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`);});
