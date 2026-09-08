import dotenv from 'dotenv'
dotenv.config()

const config = {
    MONGO_URI: process.env.MONGO_URI,
    REF_SECRET_TOKEN: process.env.REF_SECRET_TOKEN,
    ACCESS_SECRET_TOKEN: process.env.ACCESS_SECRET_TOKEN,

}

export default config;