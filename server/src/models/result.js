// src/models/result.js
import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  imageAnalyzedText: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  },

});

const Result = mongoose.model('Result', resultSchema);
export default Result;
