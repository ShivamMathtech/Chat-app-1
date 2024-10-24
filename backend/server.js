const express = require("express");
const myRoute = require("./routes/myRoute");
const authRoutes = require("./routes/authRoutes");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
require("dotenv").config();
const server = createServer(app);

const io = new Server(server);
// Create server connection
io.on("connection", (socket) => {
  console.log("Client connection established", socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});
app.use(express.json());
app.use(express.static("frontend"));
app.use("/", myRoute);
app.use("/auth", authRoutes);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
