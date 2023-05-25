import { Books } from "../models/BookModel.mjs";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).json({
      message: "Books fetched successfully from Atlas",
      status: true,
      books: books,
    });
  } catch {
    res.status(500).json({
      message: "Something went wrong",
      status: false,
    });
  }
};
