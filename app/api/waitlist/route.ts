import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("Missing env vars:", { apiKey: !!apiKey, audienceId: !!audienceId });
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Add contact to the "Waitlist" audience
    const contactResult = await resend.contacts.create({
      email,
      audienceId: audienceId,
      unsubscribed: false,
    });

    if (contactResult.error) {
      console.error("Failed to add contact:", contactResult.error);
      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email
    await resend.emails.send({
      from: "VoiceLabs <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to VoiceLabs — you're on the list",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #ffffff;">
          <!-- Logo -->
          <div style="margin-bottom: 32px;">
            <img src="https://voicelabs-website.vercel.app/voicelabs-logo.png" alt="VoiceLabs" style="height: 40px; width: auto;" />
          </div>
          
          <!-- Headline -->
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 24px; color: #111;">
            You're officially on the VoiceLabs early access list
          </h1>
          
          <!-- Body -->
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            Hey,
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            Thanks for joining the VoiceLabs early access list.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            We're building a platform that helps businesses use AI voice agents to handle repetitive conversations, answer customer questions, take orders, manage bookings, follow up with clients, and offer support 24/7.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            You'll be among the first people invited to test the platform when the early version is ready.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            Our goal is to build VoiceLabs around real business needs, so your feedback will help us improve the product, the agent flows, and the way businesses automate their voice conversations.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 16px;">
            We'll keep you updated with product progress, early access details, and the next steps for testing.
          </p>
          
          <p style="font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 32px;">
            Thanks for being part of the beginning.
          </p>
          
          <!-- Signature -->
          <div style="margin-bottom: 32px; padding-top: 16px; border-top: 1px solid #eee;">
            <p style="font-size: 15px; color: #333; margin: 0 0 4px 0; font-weight: 600;">
              Madalin Alexandru
            </p>
            <p style="font-size: 14px; color: #666; margin: 0;">
              Founder, VoiceLabs
            </p>
          </div>
          
          <!-- Social Links -->
          <div style="padding-top: 24px; border-top: 1px solid #eee; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 0 0 12px 0;">Follow us</p>
            <a href="https://facebook.com/voicelabs" style="display: inline-block; margin: 0 8px; color: #666; text-decoration: none; font-size: 13px;">Facebook</a>
            <a href="https://instagram.com/voicelabs" style="display: inline-block; margin: 0 8px; color: #666; text-decoration: none; font-size: 13px;">Instagram</a>
            <a href="https://tiktok.com/@voicelabs" style="display: inline-block; margin: 0 8px; color: #666; text-decoration: none; font-size: 13px;">TikTok</a>
            <a href="https://linkedin.com/company/voicelabs" style="display: inline-block; margin: 0 8px; color: #666; text-decoration: none; font-size: 13px;">LinkedIn</a>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 24px; text-align: center;">
            <p style="font-size: 11px; color: #999; margin: 0;">
              VoiceLabs · You received this because you signed up for early access.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
