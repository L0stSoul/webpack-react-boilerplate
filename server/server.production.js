import Express from 'express';
import Server from './server.js';

Server.use(Express.static('bundle'));

Server.listen(3005);
