import { config } from "./src/config/config";
import app from "./src/app";

const startServer = () => {
  const port = config.port || 8000;

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();
