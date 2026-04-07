import { Client } from "@notionhq/client";
import { Resend } from "resend";
import { env } from "@/lib/env";

// Initialize external clients dynamically
const notion = env.NOTION_KEY ? new Client({ auth: env.NOTION_KEY }) : null;
const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

/** Escapes special HTML characters to prevent XSS in email templates */
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, company } = body;

    if (!name || !email || !whatsapp || !company) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. Save Lead to Notion CRM
    if (notion && env.NOTION_DATABASE_ID) {
      try {
        await notion.pages.create({
          parent: { database_id: env.NOTION_DATABASE_ID },
          properties: {
            Name: { title: [{ text: { content: name } }] },
            Email: { email: email },
            WhatsApp: { phone_number: whatsapp },
            Company: { rich_text: [{ text: { content: company } }] },
            Status: { select: { name: "New Lead" } },
            "Date Added": { date: { start: new Date().toISOString() } },
          },
        });
        console.log(`[Notion] Lead ${name} saved successfully.`);
      } catch (e) {
        console.error("[Notion Error]", e instanceof Error ? e.message : String(e));
      }
    } else {
      console.warn("Notion API Keys are missing. Skipping CRM save.");
    }

    // 2. Send Email Automation via Resend
    if (resend) {
      // Send a notification to you (the owner)
      const resendRes = await resend.emails.send({
        from: env.RESEND_FROM,
        to: "mlluizdevtech@gmail.com",
        subject: `New Lead Alert: ${esc(name)}`,
        html: `<h2>New Lead Captured!</h2>
               <p><strong>Name:</strong> ${esc(name)}</p>
               <p><strong>Email:</strong> ${esc(email)}</p>
               <p><strong>WhatsApp:</strong> ${esc(whatsapp)}</p>
               <p><strong>Company:</strong> ${esc(company)}</p>
               <p>Please check your Notion CRM for more details.</p>`,
      });
      if (resendRes.error) {
        console.error("[Resend Error]", resendRes.error);
      } else {
        console.log(`[Resend] Notification email sent. ID: ${resendRes.data?.id}`);
      }

      // Optional: Send a welcome email to the user
      // await resend.emails.send({
      //   from: process.env.RESEND_FROM ?? "Acme <onboarding@resend.dev>",
      //   to: email,
      //   subject: "Thanks for requesting a preview!",
      //   html: `<p>Hi ${esc(name)},</p><p>We received your request and will get back to you within 48 hours.</p>`,
      // });
    } else {
      console.warn("Resend API Key is missing. Skipping email automation.");
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead:", error);
    return Response.json(
      { error: "Failed to process lead request" },
      { status: 500 }
    );
  }
}
