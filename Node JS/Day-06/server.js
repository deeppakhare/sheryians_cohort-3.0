const dotenv = require("dotenv")
dotenv.config();
const app = require("./src/app");

let portNo = process.env.port || 4000;

app.listen(portNo, () => {
  console.log(`Server is running on port ${portNo}`);
});
