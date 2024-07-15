import DatauriParser from "datauri/parser.js";
import path from 'path';
export const getDataURI = async (file) => {
    const parser = new DatauriParser();
    const extname = path.extname(file.originalname).toString();
    return parser.format(extname , file.buffer);
}