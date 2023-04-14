//every function in this file will be middleware
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
//middleware to upload image on mongodb
const storage=new GridFsStorage({
    url:`mongodb://${username}:${password}@ac-dgi5d9a-shard-00-00.fex0qyz.mongodb.net:27017,ac-dgi5d9a-shard-00-01.fex0qyz.mongodb.net:27017,ac-dgi5d9a-shard-00-02.fex0qyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-hf721e-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{useNewUrlParser:true},
    file:(request,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.memeType)===-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
}) 
export default multer({storage});