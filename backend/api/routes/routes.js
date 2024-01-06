import express from "express"
const router = express.Router();
import Blog from "../models/model.js";

router.get('/', async (req, res)=>{
  const blogs = await Blog.find({});
  blogs.forEach(blog =>{
    if(blog.content.length > 50){
      const someText= blog.content.slice(0,50) + "........";
      blog.content = someText.replace(/(\r\n|\n|\r)/gm, "");
    }
  })
  res.send(blogs);
});

router.post('/', async (req, res)=>{
  const slug = req.body.heading.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().replace(/\s+/g, '-').substring(0, 40);
  console.log(slug);
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