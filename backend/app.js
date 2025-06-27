import  dotenv from 'dotenv';
import express from 'express'
import { nanoid } from 'nanoid';
import connectDB from './src/config/mongodb.js';
import shortUrl from './src/models/shorturl.js';
dotenv.config();

import urlSchema from './src/routes/shorturl.routes.js';

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/create", shortUrl)


// app.get("/:shortUrl", async (req, res)=>{
//   const {shortUrl} = req.params;
//   const url = await urlSchema.findOne({shortUrl: shortUrl});
  
//   if(url){
//     res.redirect(url.fullurl);
//   }
//   else {
//     res.status(404).send("URL not found");
//   }
// })

app.listen(5000, ()=>{
  connectDB();
  console.log("Server is running on port 5000 ");
})

// Get - Redirection
// Post - create short url