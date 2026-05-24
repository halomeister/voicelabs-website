import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Environment variables needed:
// GOOGLE_SERVICE_ACCOUNT_EMAIL - service account email
// GOOGLE_PRIVATE_KEY - service account private key (from JSON key file)
// GOOGLE_CALENDAR_ID - calendar ID (usually your email)

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

function getAuthClient() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    SCOPES
  );
  return auth;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      date, // format: "2025-06-15"
      time, // format: "14:00"
      duration = 30, // minutes
      notes = "",
    } = body;

    // Validate required fields
    if (!name || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields: name, date, time" },
        { status: 400 }
      );
    }

    // Build start and end times
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60 * 1000);

    // Authenticate with Google
    const auth = getAuthClient();
    const calendar = google.calendar({ version: "v3", auth });

    // Create the event
    const event = {
      summary: `Appointment with ${name}`,
      description: `Phone: ${phone || "N/A"}\nEmail: ${email || "N/A"}\nNotes: ${notes}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "Europe/Bucharest",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "Europe/Bucharest",
      },
      attendees: email ? [{ email }] : [],
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      requestBody: event,
      sendUpdates: email ? "all" : "none",
    });

    return NextResponse.json({
      success: true,
      message: `Appointment booked successfully for ${name} on ${date} at ${time}`,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
    });
  } catch (error: unknown) {
    console.error("Failed to book appointment:", error);
    const message = error instanceof Error ? error.message : "Failed to book appointment";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
