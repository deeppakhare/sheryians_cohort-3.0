// import { ImageKit } from "@imagekit/nodejs/client.js";
import Imagekit from "imagekit";
import dotenv from 'dotenv';
dotenv.config();

const storageInstance = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const sentFiles = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    folder: "instagram-project",
  };

  return await storageInstance.upload(obj);
};
