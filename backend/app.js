import dotenv from 'dotenv';
import express from 'express';
import connectDB from './src/config/mongodb.js';
import shortUrlRoutes from './src/routes/shorturl.routes.js'; // ✅ FIXED: name and usage
import { redirectFromShortUrl } from './src/controller/shorturl.controller.js'; // ✅ FIXED: import redirect function
import { errorHandler } from './src/utils/errorHandler.js'; // ✅ FIXED: import error handler
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Mount the router correctly
app.use("/api", shortUrlRoutes);

app.get("/:id", redirectFromShortUrl); 

app.use(errorHandler)

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
