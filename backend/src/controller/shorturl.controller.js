import { getShortUrl } from "../dao/shorturl.dao.js";
import { createShortUrlwithoutUser } from "../services/shorturl.service.js";
import wrapAsync from "../utils/truCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;

  // Support optional slug
  const shortUrl = await createShortUrlwithoutUser(url, slug);

  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;

  const url = await getShortUrl(id);
  if (!url) throw new Error("Short URL not found");

  res.redirect(url.fullurl);
});
