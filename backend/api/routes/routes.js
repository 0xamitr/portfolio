import express from "express"
const router = express.Router();
import Blog from "../models/model.js";

router.get('/', async (req, res)=>{
  const blogs = await Blog.find({});
  blogs.forEach(blog =>{
    if(blog.content.length > 50){
      blog.content = blog.content.slice(0,50) + "........";
    }
  })
  res.send(blogs);
});

router.post('/', async (req, res)=>{
  let temp = req.body.heading;
  if(temp.length > 10){
    temp = temp.slice(0, 10);
  }
  const slug = temp.toLowerCase().split(' ').join('-');
  const blog = new Blog({
    heading: req.body.heading,
    content: req.body.content,
    slug: slug,
    date: new Date()
  });
  try{
    await blog.save();
  }catch{
    console.log("cant save");
  }
});

router.get('/:slug', async (req, res)=>{
  const slug = req.params.slug;
  const blog = await Blog.findOne({slug: slug});
  res.send(blog);
});


export default router;