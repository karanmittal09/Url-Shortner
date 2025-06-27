import  dotenv from 'dotenv';
import express from 'express'
import { nanoid } from 'nanoid';
import connectDB from './src/config/mongodb.js';
dotenv.config();

import urlSchema from './src/models/shorturl.js';

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/api/create", (req, res)=>{
  const {url} = req.body

  const shortUrl = nanoid(7)
  const newUrl = new urlSchema({
    originalUrl: url,
    shortUrl: shortUrl,
  })
  newUrl.save()
  
  res.send(nanoid(7));
})

app.listen(5000, ()=>{
  connectDB();
  console.log("Server is running on port 5000 ");
})

// Get - Redirection
// Post - create short url