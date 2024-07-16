import Tesseract from 'tesseract.js';

export const OCR = async (image) => {
  try {
    const { data } = await Tesseract.recognize(image);
    return data;
  }
  catch (e) {
    console.log(e);
    return e;
  }
};