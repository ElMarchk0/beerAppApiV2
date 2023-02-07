import express from "express";
import routes from "./routes";
import { connect } from "./db/connect";
import cors from "cors";

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.listen(PORT, () => {
  connect();
  console.log("Api running on port 3001");
  routes(app);
});
