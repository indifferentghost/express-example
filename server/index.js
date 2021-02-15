import dotenv from 'dotenv';
dotenv.config();
/*
NODE_ENV=development
*/
import express from 'express'
import cors from 'cors';
import routes from './routes/proxy.js';
import login from './routes/login.js';

const PORT = process.env.PORT || 3000;

const server = express();

// parse body params and attache them to req.body
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
server.use(cors());
server.use('/healthcheck', (req, res) => res.send('OK'));
server.use(express.static('public'))
server.use('/api', routes);
server.use('/login', login)
server.use('/*', (req, res) => res.send('Not Found'));

server.listen(PORT, () => {
	console.info(`Running on port: ${PORT}.`)
});