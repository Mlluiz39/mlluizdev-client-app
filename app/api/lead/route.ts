import { Client } from "@notionhq/client";
import { Resend } from "resend";

// Initialize external clients dynamically to avoid crashing if env vars are missing
const notion = process.env.NOTION_KEY ? new Client({ auth: process.env.NOTION_KEY }) : null;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
    if (notion && process.env.NOTION_DATABASE_ID) {
      try {
        await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
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
      } catch (e: any) {
        console.error("[Notion Error]", e.message);
      }
    } else {
      console.warn("Notion API Keys are missing. Skipping CRM save.");
    }

    // 2. Send Email Automation via Resend
    if (resend) {
      // Send a notification to you (the owner)
      const resendRes = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Replace with your verified domain in production if possible
        to: "mlluizdevtech@gmail.com", // Adicionado o email da sua conta Resend para permitir testes gratuitos
        subject: `New Lead Alert: ${name}`,
        html: `<h2>New Lead Captured!</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>WhatsApp:</strong> ${whatsapp}</p>
               <p><strong>Company:</strong> ${company}</p>
               <p>Please check your Notion CRM for more details.</p>`,
      });
      if (resendRes.error) {
        console.error("[Resend Error]", resendRes.error);
      } else {
        console.log(`[Resend] Notification email sent. ID: ${resendRes.data?.id}`);
      }

      // Optional: Send a welcome email to the user
      // await resend.emails.send({
      //   from: "Acme <onboarding@resend.dev>",
      //   to: email,
      //   subject: "Thanks for requesting a preview!",
      //   html: `<p>Hi ${name},</p><p>We received your request and will get back to you within 48 hours.</p>`,
      // });
      console.log(`[Resend] Notification email sent for lead ${name}.`);
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
