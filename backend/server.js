const { rmdir } = require("fs");
const app = require("./app");
const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const connectDB = require('./db/db');

connectDB();

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
