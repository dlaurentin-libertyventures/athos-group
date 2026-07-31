import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
  const apiKey = process.env.N8N_CONTACT_API_KEY;

  if (!webhookUrl || !apiKey) {
    console.error("Missing N8N_CONTACT_WEBHOOK_URL or N8N_CONTACT_API_KEY");
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    organization,
    message,
    submittedAt: new Date().toISOString(),
    source: "athosed.com/contact",
  };

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("n8n webhook failed", {
        status: upstream.status,
        urlHost: (() => {
          try {
            return new URL(webhookUrl).host;
          } catch {
            return "invalid-url";
          }
        })(),
        urlPath: (() => {
          try {
            return new URL(webhookUrl).pathname;
          } catch {
            return "invalid-url";
          }
        })(),
        detail: detail.slice(0, 500),
      });
      return NextResponse.json(
        {
          error: "Unable to send your message right now.",
          upstreamStatus: upstream.status,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("n8n webhook request error", error);
    return NextResponse.json(
      {
        error: "Unable to send your message right now.",
        upstreamStatus: 0,
      },
      { status: 502 },
    );
  }
}
