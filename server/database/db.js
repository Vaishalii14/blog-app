import mongoose from "mongoose";

const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-dgi5d9a-shard-00-00.fex0qyz.mongodb.net:27017,ac-dgi5d9a-shard-00-01.fex0qyz.mongodb.net:27017,ac-dgi5d9a-shard-00-02.fex0qyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-hf721e-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log("Db connected ");
    } catch(error){
        console.log("error",error);
    }
}

export default Connection;