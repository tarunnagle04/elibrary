import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { getBooks } from "./routes/getBooks.mjs";
// const URI = "mongodb://127.0.0.1/books";
const URI="mongodb+srv://elibrary:elibrary@cluster0.iajusko.mongodb.net/?retryWrites=true&w=majority" //Atlas_004

const app = express();
const router = express.Router();
dotenv.config();
app.use(router);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

router.get("/getbooks", getBooks);
// router.get("/addbooks", addBooks);
// router.get("/patchbooks", patchBooks);
// router.get("/deletebooks", deleteBooks);

// connection to the databases

mongoose
  .connect(process.env.URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database");
    app.listen(PORT, () => {
      console.log(
        `The server has started listening on http://localhost:${PORT}/`
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
