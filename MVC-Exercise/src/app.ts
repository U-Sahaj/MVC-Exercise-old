
// import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from "body-parser";
import express, { Express, Router } from 'express';
// import { BankingService } from './services/BankingService';
import indexRouter from './routes/indexRouter';
import bankingServiceRouter from './routes/bankingServiceRouter';

export const app : Express = express()
const port = 3000;

// const PORT: string | number = process.env.PORT || 4000
// const MONGO_USER: string  = process.env.MONGO_USER as string
// const MONGO_PASSWORD: string  = process.env.MONGO_PASSWORD  as string
// const MONGO_DB: string  = process.env.MONGO_DB  as string

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// const uri: string = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/${MONGO_DB}?retryWrites=true&w=majority`
// mongoose
//     .connect(uri)
//     .then(() =>
//         app.listen(PORT, () =>
//             console.log(`Server running on http://localhost:${PORT}`)
//         )
//     )
//     .catch((error) => {
//         throw error
//     })


// app.use('/', indexRouter)
app.use('/bank', bankingServiceRouter);

// export const bankingService = new BankingService()

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});