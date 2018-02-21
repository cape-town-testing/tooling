const server = require('./server');
const port = process.env.APP_PORT;
server.start(port);
