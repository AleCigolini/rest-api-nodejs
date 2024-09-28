import { author } from "../models/Author.js";
import book from "../models/Book.js";

class bookController {
    
    static async getBooks(req, res) {
        try {
            const books = await book.find({});
            
            // HOW TO RETURN A JSON
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async addBook(req, res) {
        const bookBody = req.body;

        try {
            const authorFound = await author.findById(bookBody.autor);

            // HOW TO ADD A AUTHOR IN A BOOK 
            const bookToCreate = { ...bookBody, autor: { ...authorFound._doc } }

            const bookCreated = await book.create(bookToCreate);

            res.status(201).json({ message: "Book created", book: bookCreated });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error to add a book` });
        }

    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            
            // HOW TO RETURN A JSON
            res.status(200).json(bookFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async updateBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            
            // HOW TO RETURN A JSON
            res.status(200).json({ message: "Book updated" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            
            // HOW TO RETURN A JSON
            res.status(200).json({ message: "Book deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }
    }

    static async getBooksByPublisher(req, res) {
        const publisher = req.query.editora;

        try {
            const books = await book.find({ editora: publisher });
            
            // HOW TO RETURN A JSON
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }
}

export default bookController;