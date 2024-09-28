import { author } from "../models/Author.js";

class authorController {
    
    static async getAuthors(req, res) {
        try {
            const authors = await author.find({});
            
            // HOW TO RETURN A JSON
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async addAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);

            res.status(201).json({ message: "Author created", author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error to add a author` });
        }

    }

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            
            // HOW TO RETURN A JSON
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async updateAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            
            // HOW TO RETURN A JSON
            res.status(200).json({ message: "Author updated" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }

    static async deleteAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            
            // HOW TO RETURN A JSON
            res.status(200).json({ message: "Author deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request error` });
        }

    }
}

export default authorController;