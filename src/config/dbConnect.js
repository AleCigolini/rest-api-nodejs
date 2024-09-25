import mongoose, { mongo } from "mongoose";

async function connectDatabase() {
    mongoose.connect("mongodb+srv://fake:fake@nodejs-course.rcry1.mongodb.net/livraria?retryWrites=true&w=majority&appName=nodejs-course");

    return mongoose.connection;
}

export default connectDatabase;