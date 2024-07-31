import { z } from "zod";

export const validationSchema = z.object({
  code: z.string().min(4, "Code should be of at least 4 digits"),
});
