const Book = require("./book.model");

const postABook = async (res, req) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .statusCode(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.log(error);
    res.statusCode(500).send({ message: "failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const Books = await Book.find().sort({ createdAt: -1 });
    res.statusCode(200).send(Books);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "failed to fetch books" });
  }
};

const getSingleBook = async (res, req) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "book not found" });
    }
    res.statusCode(200).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "failed to fetch book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.param;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if (!updatedBook) {
      res.status(400).send({ message: "failed to update book" });
    }
    res.status(200).send({ message: "book updated successfully", updatedBook });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "failed to update a book" });
  }
};

const deleteABook = async(req,res)=>{
    try {
        const {id} = req.param
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            res.status(400).send({ message: "failed to delete book" });
          }
          res.status(200).send({ message: "book deleted successfully", deletedBook });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "failed to delete a book" });
    }
}

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook
};
