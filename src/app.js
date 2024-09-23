import express from "express";

const app = express();

// MIDDLEWARE
app.use(express.json());

const books = [
{
    id: 1,
    title: "The office"
},
{
    id: 2,
    title: "Clean Architecture"
}
];

function getBook(idBook) {
    return books.findIndex(book => book.id === Number(idBook));
}

app.get("/", (req, res) => {
    // SEND METHOD USUALLY IS USED TO SIMPLY DATA
    res.status(200).send("Node.js course!!");
});

app.get("/books", (req, res) => {
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