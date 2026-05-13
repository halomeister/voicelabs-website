import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!AUDIENCE_ID) {
      console.error("RESEND_AUDIENCE_ID is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Add contact to the "Waitlist" audience
    const contactResult = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
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
      from: "VoiceLabs AI <onboarding@resend.dev>",
      to: email,
      subject: "You're on the VoiceLabs waitlist! 🎉",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
          <div style="margin-bottom: 32px;">
            <span style="font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">VoiceLabs</span>
            <span style="font-size: 11px; color: #666; margin-left: 6px;">AI</span>
          </div>
          
          <h1 style="font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #111;">
            You're on the list!
          </h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 24px;">
            Thanks for joining the VoiceLabs waitlist. We're building the next generation of AI voice agents and you'll be among the first to try it.
          </p>
          
          <div style="background: #f8f8f8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="font-size: 14px; color: #666; margin: 0 0 8px 0; font-weight: 500;">What happens next:</p>
            <ul style="font-size: 14px; line-height: 1.8; color: #444; padding-left: 20px; margin: 0;">
              <li>We'll notify you as soon as early access opens</li>
              <li>You'll get priority access before the public launch</li>
              <li>Exclusive updates on features and progress</li>
            </ul>
          </div>
          
          <p style="font-size: 14px; line-height: 1.6; color: #666;">
            In the meantime, feel free to reply to this email if you have any questions or want to share your use case — we'd love to hear from you.
          </p>
          
          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              VoiceLabs AI · San Francisco, CA<br/>
              You received this because you signed up for the waitlist.<br/>
              <a href="#" style="color: #999;">Unsubscribe</a>
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
