import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import limiter from "express-rate-limit";
import ResponseFormatter from "./src/helpers/response";
dotenv.config();
import ParkRoutes from "./src/routes/park";

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(
  limiter({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20
  })
);

app.use("/parks", ParkRoutes);

app.get("/test", (req, res) => {
  res.json(ResponseFormatter(res.statusCode, null, "success"));
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
