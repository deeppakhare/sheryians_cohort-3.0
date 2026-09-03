import app from './app/app.js'
import { connectToDB } from './config/db.js';

connectToDB()

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})