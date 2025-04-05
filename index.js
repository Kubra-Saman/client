import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

dotenv.config();

const port = process.env.PORT;
const dbUrl = process.env.DBURL;
const dbName = process.env.DBNAME;

connectDB(dbUrl, dbName);

app.use(cors());
app.use("/product", productRoutes);

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
