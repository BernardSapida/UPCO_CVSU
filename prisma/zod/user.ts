import * as z from "zod"

export const userSchema = z.object({
  id: z.string(),
  clerkUserId: z.string(),
  role: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
