import mongoose from "mongoose";

const shorturlSchema = new mongoose.Schema({
  fullurl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    index : true,
    unique: true, // Ensure that short URLs are unique
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User', // Assuming you have a User model
  },
});

const shortUrl = mongoose.model("ShortUrl", shorturlSchema);

export default shortUrl;