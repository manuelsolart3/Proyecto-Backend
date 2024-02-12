import express from 'express';
import morgan from 'morgan';
import cookieparser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskroutes from './routes/task.routes.js';
import cors from 'cors';

const app= express();


app.use(cors);
app.use(morgan('dev'));
app.use(cookieparser());
app.use(express.json());



app.use("/api", authRoutes)
app.use("/api", taskroutes)

export default app;


  