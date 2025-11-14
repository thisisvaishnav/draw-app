import { z } from "zod";

export const UserSchema = z.object({
    
    username: z.string(),
    password: z.string(),
    name: z.string()
});

export const SigninSchema  = z.object({
    username: z.string(),
    password: z.string(),
});

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8).max(20),
    name: z.string().min(3).max(20),
});

export type CreateUserSchema = z.infer<typeof CreateUserSchema>;

