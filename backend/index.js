const express = require("express");
const Blog = require("./models/model");
const app = express();
require("dotenv").config();
const port = 5000;
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer');

// Enable CORS
app.use(cors());
const upload = multer();
mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
};

app.get('/', async (req, res)=>{
  const blogs = await Blog.find({});
  console.log(blogs);
});

app.post('/', upload.none(), (req, res)=>{
  const blog = new Blog({
    heading: req.body.heading,
    content: req.body.content,
    date: new Date()
  });
  try{
    blog.save();
  }catch{
    console.log("cant save");
  }
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
