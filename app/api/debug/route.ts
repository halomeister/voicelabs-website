import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.RESEND_API_KEY,
    hasAudienceId: !!process.env.RESEND_AUDIENCE_ID,
    apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 6) || "not set",
    audienceIdPrefix: process.env.RESEND_AUDIENCE_ID?.substring(0, 8) || "not set",
    nodeEnv: process.env.NODE_ENV,
  });
}
