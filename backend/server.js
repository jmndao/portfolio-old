import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
import aboutRoute from "./routes/about.route.js";
import projectRoute from "./routes/project.route.js";
import contactRoute from "./routes/contact.route.js";
import homeRoute from "./routes/home.route.js";
import jcodeRoute from "./routes/jcode.route.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

// Initializing Express
const app = express();

// Enabling Express body parser
app.use(express.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/about", aboutRoute);
app.use("/api/projects", projectRoute);
app.use("/api/contact", contactRoute);
app.use("/api/download", homeRoute);
app.use("/api/jcodes", jcodeRoute);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    // Set the api entry point
    app.get("/", (req, res) => {
        res.send("Portfolio API running...");
    });
}

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