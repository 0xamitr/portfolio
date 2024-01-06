import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import router from './api/routes/routes.js'
 
dotenv.config();
const port = 5000;
const app = express();
mongoose.set("strictQuery", false);
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.amitrathore.in"); // Allow access from all origins
  // You can also specify a specific origin: res.header("Access-Control-Allow-Origin", "https://yourdomain.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blog', router);
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
};

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
