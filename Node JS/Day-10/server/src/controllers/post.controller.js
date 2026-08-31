import PostModel from "../models/post.model";

const createPost = async (req, res) => {
    try {
        let {caption, image} = req.body;

        const newPost = await postModel.create({
            caption,
            image
        });
        return res.status(201).json({
            message:"Post created successfully",
            data: newPost,
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal api error"
        })
        
    }
}

export default {
    createPost
}