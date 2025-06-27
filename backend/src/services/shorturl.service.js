import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.js";

export const createShortUrlService = async (url) => {
  const shortUrl = await generateNanoId(7); // Generate a short URL using nanoid    
    const newUrl = new urlSchema({
      fullurl: url,
      shortUrl: shortUrl,
    })
    await newUrl.save()

    return shortUrl;
}