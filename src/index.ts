import { allowCors } from './middlewares/allowCors';
import * as bodyParser from 'body-parser';

const express = require('express');
const app = express();
app.use(allowCors);
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/login', (req: any, res: any) => {
    const { email, password }  = req.body;

    if(email !== "sustain@fullstack.com.br" || password !== "fullstack@2020"){
        return res.sendStatus(401);
    }
    return res.json({"token": "c3VzdGFpbkBmdWxsc3RhY2suY29tLmJy"});
});

const server = app.listen(8080, () => {
    console.log(`server started: PORT: ${8080}`);
  });
  
  process.on('unhandledRejection', () => { /* ignore */ });
  process.on('SIGINT', () => {
    server.close(() => {
      process.exit(0);
    });
  });