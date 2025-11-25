import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
        cloud_name: 'Process.env.CLOUDINARY_CLOUD_NAME', 
        api_key: 'Process.env.CLOUDINARY_API_KEY', 
        api_secret: 'Process.env.CLOUDINARY_API_SECRET' // Click 'View API Keys' above to copy your API secret
    });

    const uploadCloudinary = async(localFilePath) => {
        try {
            if(!localFilePath)  return null
          const response =  await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            })
            console.log("File uploaded to Cloudinary successfully",response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath)
            console.error("Error uploading file to Cloudinary",error);
            return null
        }
    }


    export {uploadCloudinary};