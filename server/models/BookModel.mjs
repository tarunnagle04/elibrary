import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  TITLE: {
    type: String,
    required: true,
  },
  AUTHOUR: {
    type: String,
    required: true,
  },
  PUBLICATION: {
    type: String,
    required: true,
  },
  QUANTITY: {
    type: Number,
    required: true,
  },
  DEPARTMENT: {
    type: String,
    required: true,
  },
});

export const Books = mongoose.model("book", BookSchema);
