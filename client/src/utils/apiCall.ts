import axios from 'axios'
import { useState } from 'react'
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

export const analyzeImage = async (image: File, text: string) => {
    try {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('text', text)
        console.log(formData);
        
        
        const response = await axios.post(`${SERVER_URL}/api/bot/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log(response.data);
        
        return response.data

    } catch (error) {
        console.log(error)
    }

}