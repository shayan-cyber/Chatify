import Tesseract from 'tesseract.js';

export const OCR = async (image) => {

  const { data } = await Tesseract.recognize(image);

  return data;
};