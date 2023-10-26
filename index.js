// Requirement 1
import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
import { startUp } from './routes/startup.js';
import { trackOrder } from './routes/track-order.js';

// Requirement 3
const port = 8080
const app = express();
app.use(express.json());
app.use('/', startUp)
app.use(trackOrder)

const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions, app);


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port);
});

