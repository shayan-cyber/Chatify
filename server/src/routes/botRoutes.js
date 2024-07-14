import express from 'express';
const router = express.Router();
import multer from 'multer';
import {uploadImage} from '../controllers/botController.js';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage);

export default router;
