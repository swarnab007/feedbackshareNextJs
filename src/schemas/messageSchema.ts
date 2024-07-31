import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(10, "Message should be at least 10 words")
    .max(200, "Message should be less than 200 words"),
});
