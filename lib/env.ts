import { z } from "zod";

const envSchema = z.object({
  // Notion CRM
  NOTION_KEY: z.string().min(1, "NOTION_KEY is required"),
  NOTION_DATABASE_ID: z.string().min(1, "NOTION_DATABASE_ID is required"),

  // Resend email
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  RESEND_FROM: z
    .string()
    .min(1, "RESEND_FROM is required")
    .default("Acme <onboarding@resend.dev>"),

  // Public vars
  NEXT_PUBLIC_WHATSAPP: z
    .string()
    .min(1, "NEXT_PUBLIC_WHATSAPP is required")
    .default("55SEUNUMERO"),
});

// Validate at module load time — throws with a clear message if any var is missing.
// This runs only on the server (route handlers, server components, etc.).
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const missing = parsed.error.issues.map((i) => i.path.join(".")).join(", ");
  throw new Error(
    `❌ Invalid environment variables: ${missing}\n` +
      parsed.error.issues.map((i) => `  • ${i.path}: ${i.message}`).join("\n")
  );
}

export const env = parsed.data;
