import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, preferredDate, message } = await request.json();

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Name and valid email are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send notification email to the team
    await resend.emails.send({
      from: "VoiceLabs <onboarding@resend.dev>",
      to: "bookademo@voicelabs.ai",
      subject: `New Demo Request from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px;">
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 24px; color: #111;">
            New Demo Request
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #666; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #666;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111;"><a href="mailto:${email}" style="color: #111;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #666;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${company}</td>
            </tr>` : ""}
            ${phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #666;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111;"><a href="tel:${phone}" style="color: #111;">${phone}</a></td>
            </tr>` : ""}
            ${preferredDate ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #666;">Preferred Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${preferredDate}</td>
            </tr>` : ""}
          </table>

          ${message ? `
          <div style="margin-bottom: 24px;">
            <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Message:</p>
            <p style="font-size: 14px; color: #111; background: #f8f8f8; padding: 16px; border-radius: 8px; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          ` : ""}

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              This request was submitted via the VoiceLabs website demo booking form.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the requester
    await resend.emails.send({
      from: "VoiceLabs <onboarding@resend.dev>",
      to: email,
      subject: "We received your demo request — VoiceLabs",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px;">
          <div style="margin-bottom: 32px;">
            <img src="https://voicelabs-website.vercel.app/voicelabs-logo.png" alt="VoiceLabs" style="height: 60px; width: auto;" />
          </div>
          
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px; color: #111;">
            We got your demo request!
          </h1>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            Hey ${name},
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            Thanks for your interest in VoiceLabs. We received your demo request and will get back to you within 24 hours to schedule a personalized walkthrough.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            During the demo, we'll show you how VoiceLabs can help your business automate voice conversations, from setup to deployment.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 32px;">
            Talk soon!
          </p>
          
          <div style="padding-top: 16px; border-top: 1px solid #eee;">
            <p style="font-size: 15px; color: #333; margin: 0 0 4px 0; font-weight: 600;">Madalin Alexandru</p>
            <p style="font-size: 14px; color: #666; margin: 0;">Founder, VoiceLabs</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book demo error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
