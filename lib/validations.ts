import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid work email address."),
  company: z.string().min(2, "Tell us where you work."),
  teamSize: z.enum(["1-10", "11-50", "51-200", "200+"], {
    errorMap: () => ({ message: "Select a team size." }),
  }),
  message: z
    .string()
    .min(10, "A little more detail helps us route your request.")
    .max(1000, "Please keep it under 1000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
