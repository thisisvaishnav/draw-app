import express from "express";
import jwt from "jsonwebtoken";     // @types/jsonwebtoken
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";


const app = express();


app.post("/signin", (req, res)=>{
    const userID = 1;
    const token = jwt.sign({
        userID
    }, JWT_SECRET);
    res.json( {
        token
    })
});

app.post("/room",middleware, (req, res)=>{
    res.json({
        roomId: 123
    })      
}

)

app.listen(3001);