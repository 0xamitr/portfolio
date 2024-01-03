import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    heading: String,
    content: String,
    slug: String,
    date: Date,
});

export default mongoose.model("Blog", BlogSchema);
