
import {OCR} from '../services/OCR.js';
import fs from 'fs';
import path from 'path';
import Result from '../models/result.js';
export const uploadImage = async (req, res) => {
    console.log("hello");
  const image = req.file;
  const {text} = req.body;

  console.log({text});

  if (!image) {
    return res.status(400).json({
      message: 'No image provided',
    });
  }
  const analyzedData = await OCR(path.resolve(image.path));
  const analyzedText = analyzedData.text;
  const newResult = new Result({
    text:text,
    imagePath:image.path,
    imageAnalyzedText:analyzedText,
  })
  await newResult.save();
  console.log({analyzedText});
  res.json(analyzedText);
};