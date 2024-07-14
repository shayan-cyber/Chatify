import React from 'react'
import { useState } from 'react'
import { analyzeImage } from '../utils/apiCall'

function UploadForm() {
    const [image, setImage] = useState<File | null>(null)
    const [response, setResponse] = useState<any>(null)

    const handleImageUpload =  async (img: File) => {
         if(img){
            setImage(img)
            const response = await analyzeImage(img)
            setResponse(response)
        }
    }



  return (
    <div>
        <h1>Upload Form</h1>

        <div></div>

    </div>
  )
}

export default UploadForm