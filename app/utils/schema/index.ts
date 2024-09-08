// External Dependencies
import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  gender: z.string().min(1, { message: "Please select your gender." }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
