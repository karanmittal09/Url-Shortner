import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shorturl.dao.js";


export const createShortUrlwithoutUser = async (url) => {
  const shortUrl = generateNanoId(7); // Generate a short URL using nanoid
  await saveShortUrl(shortUrl, url); // Save the URL to the database
    return shortUrl;
}

export const createShortUrlwithUser = async (url, userId) => {
  const shortUrl = generateNanoId(7); // Generate a short URL using nanoid
  await saveShortUrl(shortUrl, url, userId); // Save the URL to the database
    return shortUrl;
}