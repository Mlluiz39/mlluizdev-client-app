import { z } from "zod";

const serverSchema = z.object({
  // Notion CRM
  NOTION_KEY: z.string().min(1, "NOTION_KEY is required"),
  NOTION_DATABASE_ID: z.string().min(1, "NOTION_DATABASE_ID is required"),

  // Resend email
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  RESEND_FROM: z
    .string()
    .min(1, "RESEND_FROM is required")
    .default("Acme <onboarding@resend.dev>"),
});

const clientSchema = z.object({
  // Public vars
  NEXT_PUBLIC_WHATSAPP: z
    .string()
    .min(1, "NEXT_PUBLIC_WHATSAPP is required")
    .default("55SEUNUMERO"),
});

// Validate client env vars
const parsedClient = clientSchema.safeParse({
  NEXT_PUBLIC_WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP,
});

if (!parsedClient.success) {
  throw new Error(
    `❌ Invalid client environment variables:\n` +
      parsedClient.error.issues.map((i) => `  • ${i.path}: ${i.message}`).join("\n")
  );
}

// Validate server env vars only if we are on the server
let parsedServerData = {} as z.infer<typeof serverSchema>;

if (typeof window === "undefined") {
  const parsedServer = serverSchema.safeParse(process.env);
  if (!parsedServer.success) {
    const missing = parsedServer.error.issues.map((i) => i.path.join(".")).join(", ");
    throw new Error(
      `❌ Invalid server environment variables: ${missing}\n` +
        parsedServer.error.issues.map((i) => `  • ${i.path}: ${i.message}`).join("\n")
    );
  }
  parsedServerData = parsedServer.data;
}

export const env = {
  ...parsedServerData,
  ...parsedClient.data,
};
