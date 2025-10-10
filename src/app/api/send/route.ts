import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const { error } = await resend.emails.send({
      from: "Vektorizer Contact <info@vektorizer.com>",
      to: ["info@vektorizer.com"],
      subject: `📩 New Contact: ${subject}`, 
      replyTo: email, 
      react: EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
