import express from 'express';
const router = express.Router();
import multer from 'multer';
import path from 'path';
import { uploadImage, getImageAnalysishistory } from '../controllers/botController.js';

const storage = multer.memoryStorage() ;

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images are allowed.'));
    }
};


const upload = multer({ storage: storage , fileFilter: fileFilter });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/history', getImageAnalysishistory);
export default router;
