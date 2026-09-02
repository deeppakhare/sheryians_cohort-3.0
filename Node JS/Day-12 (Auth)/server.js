import app from "./src/app/app.js";
import connectDb from "./src/config/db.js";

await connectDb();



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})