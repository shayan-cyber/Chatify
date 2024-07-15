
import { OCR } from '../services/OCR.js';
import { uploadFile } from '../utils/storage.js';
import { getDataURI } from '../utils/getDataURI.js';
import Result from '../models/result.js';
export const uploadImage = async (req, res) => {
  try {

    const image = req.file;
    const { text } = req.body;



    if (!image) {
      return res.status(400).json({
        message: 'No image provided',
      });
    }
    const dataURI = await getDataURI(image);
    const { secure_url } = await uploadFile(dataURI);
    const analyzedData = await OCR(secure_url);
    const analyzedText = analyzedData.text;


    const newResult = new Result({
      text: text,
      imagePath: secure_url,
      imageAnalyzedText: analyzedText,
    })
    await newResult.save();

    res.json(analyzedText);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getImageAnalysishistory = async (req, res) => {
  const results = await Result.find({}).sort({ timestamp: -1 });
  res.json(results);
}