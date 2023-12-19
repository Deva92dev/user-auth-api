import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const start = () => {
  try {
    server.listen(port, async () => {
      // await connectDB();
      console.log(`Server is listening on the port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
