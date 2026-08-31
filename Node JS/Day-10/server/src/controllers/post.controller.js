import PostModel from "../models/post.model.js";
import { sentFiles } from "../services/storage.service.js";

export const createPost = async (req, res) => {
  try {
    let { caption } = req.body;
    let  file  = req.file;

    if(!caption || !file) return res.status(400).json({
        success:false,
        message:"fielda are required"
    })
    
    const uploadImage = await sentFiles(file.buffer,file.orignalname)


    const post = await PostModel.create({
        caption,
        image:uploadImage.url
    })

     res.status(200).json({
        success:true,
      message: "Post created success",
    });


  } catch (error) {
    res.status(500).json({
      message: "Internal api error",
    });
  }
};

export const getAllPost = async (req, res) => {
    const posts = PostModel.find()

    return res.statu(200).json({
        success:true,
        message:"All post featched"
    })
}


