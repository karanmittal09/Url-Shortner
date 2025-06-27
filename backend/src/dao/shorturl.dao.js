// dao = data access object
import urlSchema from "../models/shorturl.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  const newUrl = new urlSchema({
      fullurl: longUrl,
      shortUrl: shortUrl,
    })

    if(userId){
      newUrl.user = userId; // Associate the short URL with the user if userId is provided
    }
    newUrl.save()
}

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate({  shortUrl: shortUrl }, {$inc: { clicks: 1 }});
}