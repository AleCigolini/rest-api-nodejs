import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const author = mongoose.model("autores", authorSchema);

export {author, authorSchema};