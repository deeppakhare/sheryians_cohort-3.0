import app from './app/app.js'
import config from './config/config.js';
import { connectToDB } from './config/db.js';

connectToDB()

let port = config.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})