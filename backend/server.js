import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
import aboutRoute from "./routes/about.route.js";
import projectRoute from "./routes/project.route.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

// Initializing Express
const app = express();

// Enabling Express body parser
app.use(express.json());

// Set the api entry point
app.get("/", (req, res) => {
    res.send("Portfolio API running...");
});

// Routes
app.use('/api/users', userRoute);
app.use('/api/about', aboutRoute);
app.use('/api/projects', projectRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8800;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.underline
        .bold
    )
);