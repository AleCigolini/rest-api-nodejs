import mongoose from "mongoose";

// DEFINE THE STRUCTURE AND PROPERTIES OF SOME OBJECT
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

// DEFINE THE MODEL
const book = mongoose.model("livros", bookSchema);

export default book;