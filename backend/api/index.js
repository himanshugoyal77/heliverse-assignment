import express from "express";
import connectDB from "../db/connect.js";
import User from "../models/user.model.js";
import userRoutes from "../routes/user.routes.js";
import teamRoutes from "../routes/team.routes.js";
import cors from "cors";
// import data from "./userData.json" assert { type: "json" };

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://heliverse-frontend-vite.vercel.app/",
    credentials: true,
  })
);

https: app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/team", teamRoutes);

const uploadUsers = async () => {
  try {
    await User.deleteMany({});
    const users = await User.create(data);
    console.log("Users uploaded to DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
