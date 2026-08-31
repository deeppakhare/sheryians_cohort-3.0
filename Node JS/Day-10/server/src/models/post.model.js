import mongoose from "mongoose";

const postScheme = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const PostModel = mongoose.model("posts", postScheme);

export default PostModel;
