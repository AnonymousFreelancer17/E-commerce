import express from "express";
import cors from "cors";
import { errorMiddleware } from '../../../packages/error_handler/error_middleware';
import cookieParser from "cookie-parser";


const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`[ Auth Services ready ] http://localhost:${port}/api`);
});

app.get("/", (req, res) => {
  res.send({
    message: "Hello from Auth Services",
  });
});

app.use(errorMiddleware);

server.on("error", (err) => {
  console.log("Server Error : ", err);
});
