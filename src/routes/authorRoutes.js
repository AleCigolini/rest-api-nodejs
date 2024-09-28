import express from "express";
import authorController from "../controllers/authorController.js";

const routes = express.Router();

// EXPRESS CALL THE ROUTES BY SEQUENCE
routes.get("/authors", authorController.getAuthors);
routes.get("/authors/:id", authorController.getAuthorById);
routes.post("/authors", authorController.addAuthor);
routes.put("/authors/:id", authorController.updateAuthorById);
routes.delete("/authors/:id", authorController.deleteAuthorById);

export default routes;