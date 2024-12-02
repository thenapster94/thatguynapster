import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { Resend } from "resend";

import { ContactResponseEmail } from "@/components/emails/contactResponseEmail";
import { ContactFormEmail } from "@/components/emails/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  // Parse request body
  const reqBody = await req.json();

  const { name, email, message } = reqBody;

  try {
    // Send notification email to myself
    await resend.emails
      .send({
        from: "Contact Form <no-reply@thatguynapster.com>",
        to: ["andrewosei94@gmail.com"],
        subject: `New Contact - ${name}`,
        react: ContactFormEmail({ name, email, message }),
        text: "",
      })
      .catch((err) => {
        const error = new Error("Failed to send email to notify new contact");
        error.name = "EmailSendFailure";
        error.cause = err;
        throw error;
      });

    // Send response email to user
    await resend.emails
      .send({
        from: "thatGuyNapster <no-reply@thatguynapster.com>",
        to: [email],
        subject: `New Contact - ${name}`,
        react: ContactResponseEmail({ name }),
        text: "",
      })
      .catch((err) => {
        const error = new Error("Failed to send response email to user");
        error.name = "ResponseEmailSendFailure";
        error.cause = err;
        throw error;
      });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent",
        code: 200,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        ...error,
        message: "Error",
      },
      { status: 500 }
    );
  }
};
