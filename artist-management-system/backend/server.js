import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`AURORA backend running on http://localhost:${PORT}`);
  });
});
