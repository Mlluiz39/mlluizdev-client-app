# mlluizdevtech | High-Converting Digital Curation & Solutions

A premium, high-performance landing page designed for selling architectural digital solutions to clients abroad. This project is built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**, focusing on high-ticket B2B service sales through an editorial and trust-building user experience.

## 💼 The Business Solution

This landing page is not just a website; it's a **Conversion Engine** designed for a specific business model:
- **International B2B Scaling**: Built to capture high-value clients looking for premium digital engineering.
- **Low Friction Entry**: Implements a "No Upfront Payment" and "48h High-Fidelity Preview" strategy.
- **Trust-Centered Design**: Uses an editorial, "no-line" design system to position **mlluizdevtech** as a premium studio.

## 🚀 Key Project Modules

- **Next.js 15 (App Router)**: Optimized architecture for SEO and rapid core web vital scoring.
- **Dynamic Design System**: Custom tokens in Tailwind v4 for Light/Dark mode, ensuring brand consistency across any client solution.
- **Framer Motion Animations**: Scroll-triggered storytelling that guides the user through the *Pre-Process*, *Outcomes*, and *Portfolio* sections.
- **CRM Integration (Notion)**: Seamless lead capture directly into a Notion Workspace for pipeline management.
- **Email Automation (Resend)**: Instant email triggers to notify the sales team of a new "Free Preview" request.

## 🛠️ Tech Stack & Integrations

- **Frontend**: [Next.js 15](https://nextjs.org), React, TypeScript.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Modern utility-first framework).
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (Smooth editorial transitions).
- **Lead Capture API**: Custom Next.js Edge-ready route.
- **CRM**: [Notion API](https://developers.notion.com).
- **Communication**: [Resend SDK](https://resend.com) (Transaction email delivery).

## ⚙️ How to Configure (Setup Guide)

To deploy or run this solution, you must configure your `.env.local` file with the following keys:

```env
# Notion CRM (Database integration)
NOTION_KEY=secret_your_notion_integration_token
NOTION_DATABASE_ID=your_database_id

# Resend (Email Automation)
RESEND_API_KEY=re_your_resend_api_key
```

### Notion Database Configuration
Ensure your Notion Database includes these exact properties for the API to sync correctly:
1. **Name** (Title)
2. **Email** (Email)
3. **WhatsApp** (Phone)
4. **Company** (Text)
5. **Status** (Select: `New Lead`, `Discovery`, `Preview Sent`)
6. **Date Added** (Date/Created Time)

## 📦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run developement server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

## 📂 Project Highlights

- `app/api/lead/`: Server-side logic for data validation, CRM syncing, and email triggering.
- `components/ui/ThemeToggle`: A custom React component for smooth theme transitions.
- `app/globals.css`: The heart of the design system, declaring semantic variables for a clean, editorial look.

---
Curated by **mlluizdevtech** — Selling digital excellence abroad.
