import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const serverEnvSchema = z.object({
  INTERNAL_API_KEY: z.string().min(1),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const serverEnv = serverEnvSchema.parse({
  INTERNAL_API_KEY: process.env.INTERNAL_API_KEY,
  NODE_ENV: process.env.NODE_ENV,
});

