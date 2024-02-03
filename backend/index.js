import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import router from './api/routes/routes.js'
import bodyParser from 'body-parser';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
mongoose.set("strictQuery", false);

app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/blog', router);
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
};

app.get('/', (req,res)=>{
  res.send("IT WORKS");
})

app.listen(port, "0.0.0.0", function () {
  console.log(`Server running on port ${port}`);
});
