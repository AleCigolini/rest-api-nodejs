import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

// DEFINE THE STRUCTURE AND PROPERTIES OF SOME OBJECT
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: authorSchema
}, { versionKey: false });

// DEFINE THE MODEL
const book = mongoose.model("livros", bookSchema);

export default book;