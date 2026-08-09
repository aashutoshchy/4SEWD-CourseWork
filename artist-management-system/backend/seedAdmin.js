import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import "dotenv/config";
import mongoose from "mongoose";
import User from "./src/models/User.js";

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await User.deleteMany();

    await User.create({
      username: "aurora_admin",
      password: "admin123",
    });

    console.log("Admin user created");
  } catch (error) {
    console.error("Failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedAdmin();
