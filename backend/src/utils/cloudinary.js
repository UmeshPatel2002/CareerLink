import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from 'dotenv'
dotenv.config();

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    const uploadOnCloudinary=async(localFilePath) =>{
    
        try{
           if(!localFilePath) return null;
           console.log("hello");
           console.log(localFilePath);
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
                secure_url:true
            })

            console.log("file is uploaded successfully",response);
            fs.unlinkSync(localFilePath);
            console.log(response.secure_url);
            return response;
        }
        catch(error){
            fs.unlinkSync(localFilePath) 
            return null;
        }
    }


   export { uploadOnCloudinary }