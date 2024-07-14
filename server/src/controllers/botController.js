
import {OCR} from '../services/OCR.js';

export const uploadImage = async (req, res) => {
    console.log("hello");
  const image = req.file.buffer;
  console.log(image);
  if (!image) {
    return res.status(400).json({
      message: 'No image provided',
    });
  }
  const {text} = await OCR(image);
  res.json(text);
};