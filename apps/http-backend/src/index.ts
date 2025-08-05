import express from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

const app = express();

app.use(express.json());

    app.post("/signup", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password); 
});

app.post("/signup", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
});

app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jwt.sign({userId}, JWT_SECRET);
    res.json({ token });
});

app.post("/room", middleware, (req, res) => {
    res.json({
        roomId: 123,
    })
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 