import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

export const uploadFile = async ( file) => {
    try{
        const result = await cloudinary.v2.uploader.upload(file.content, {
            folder: 'uploads',
            use_filename: true,
            unique_filename: false,
            tags: 'ocr',
            resource_type: 'image',
            invalidate: true,
        });
        
        return result;

    }catch(e){
        console.log(e);
    }
    
};

