import { createShortUrlService } from "../services/shorturl.service.js";


export const createShortUrl = async(req , res) => {
   const { url } = req.body;
   const shortUrl = await createShortUrlService(url);
   res.send(process.env.APP_URL + shortUrl);
}