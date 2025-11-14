import express from "express";
import jwt from "jsonwebtoken";     // @types/jsonwebtoken
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware"   
import { CreateUserSchema } from "@repo/common/types";
import {prisma} from "@repo/db/src/index"
const app = express();



app.post("/signup", (req, res)=>{
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "invalid data"
        })
        return;
    }
    res.json({
        userId: "1234567890"
    })
});

app.post("/room",middleware, (req, res)=>{
    res.json({
        roomId: 123
    })      
}

)
