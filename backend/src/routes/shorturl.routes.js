import express from 'express';
import { createShortUrl } from '../controller/shorturl.controller.js';

const router = express.Router();

router.post('/create', createShortUrl); // ✅ add /create here

export default router;
