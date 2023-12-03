const express = require("express");
const Blog = require("./models/model");
const app = express();
require("dotenv").config();
const port = 3000;
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
};

app.get('/', async (req, res)=>{
  const blogs = await Blog.find({});
  console.log(blogs);
});

// app.post('/', (req, res)=>{
//   const blog = new Blog
// });

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
