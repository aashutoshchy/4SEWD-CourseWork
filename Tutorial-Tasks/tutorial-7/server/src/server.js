import app from "./app.js";
import { config } from "./configs/index.js";

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
