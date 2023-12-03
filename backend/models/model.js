const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    heading: String,
    content: String,
    date: Date,
});

module.exports = mongoose.model("Blog", BlogSchema);
