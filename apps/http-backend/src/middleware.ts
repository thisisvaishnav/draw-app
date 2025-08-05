import { Request, Response , NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export function middleware ( req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userID) {
        // @ts-ignore: 
        req.userId = decoded.userID;
        next()
    } else {
        res.status(401).json({ 
            message: "Unauthorized",
            success: false
        });
    }
}