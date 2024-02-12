import app from "./app.js";
import { PORT } from "./config.js";
import "./database/mibase.js";

async function main() {
  app.listen(PORT);
  console.log("Server on port", PORT);
}

main();