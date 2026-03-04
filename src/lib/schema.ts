import { z } from "zod";

export const feedbackSchema = z.object({
  message: z.string().min(1, "Message is required"),
  rating: z.number().min(1).max(5),
  site_id: z.string().default("tpm-website"),
});

export type FeedbackRequest = z.infer<typeof feedbackSchema>;

export const feedbackResponseSchema = z.object({
  id: z.number(),
  site_id: z.string(),
  rating: z.number(),
  message: z.string(),
});

export type FeedbackResponse = z.infer<typeof feedbackResponseSchema>;

export const joinCommunitySchema = z
  .object({
    category: z.enum(["individual", "organisation", "government"]),
    what_defines_you: z.string().min(1, "This field is required"),
    what_to_share: z.string().min(1, "This field is required"),
    link: z.string().url().optional().or(z.literal("")),
    is_anonymous: z.boolean().default(false),
    site_id: z.string().default("tpm-website"),
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.is_anonymous) {
        return !!data.name && !!data.email && !!data.phone;
      }
      return true;
    },
    {
      message: "Name, email, and phone are required when not anonymous",
      path: ["name"],
    },
  );

export type JoinCommunityRequest = z.infer<typeof joinCommunitySchema>;

export const joinCommunityResponseSchema = z.object({
  id: z.number(),
  site_id: z.string(),
  category: z.string(),
  what_defines_you: z.string(),
  what_to_share: z.string(),
  link: z.string().nullable(),
  is_anonymous: z.boolean(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
});

export type JoinCommunityResponse = z.infer<typeof joinCommunityResponseSchema>;
