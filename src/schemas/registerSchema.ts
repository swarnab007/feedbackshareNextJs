import { z } from "zod";

export const usernameVerify = z
  .string()
  .min(2, "username must be 2 or more characters long")
  .max(10, "username must be 10 or fewer characters long");

// signup schema
export const registerSchema = z.object({
  username: usernameVerify,
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(6, "Password should be of at least 6 characters")
    .regex(
      /[^A-Za-z0-9]/,
      "Password should contain at least one special character"
    ),
});
