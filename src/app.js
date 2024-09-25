import express from "express";
import connectDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
    console.error(error);
});

connection.once("open", () => {
    console.log("Connection opened");
});

const app = express();
// MIDDLEWARE
app.use(express.json());


// ROUTES 

app.get("/", (req, res) => {
    // SEND METHOD USUALLY IS USED TO SIMPLY DATA
    res.status(200).send("Node.js course!!");
});

app.get("/books", async (req, res) => {
    const books = await book.find({});

    // HOW TO RETURN A JSON
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    // GET REQUEST PARAMETERS
    const index = getBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book " + req.body.title + " created!!");
});

app.put("/books/:id", (req, res) => {
    const index = getBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book of id " + req.params.id + " deleted!!");
});

export default app;