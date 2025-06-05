export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile, readFile } from "fs/promises";

const filePath = path.resolve(process.cwd(), "lib/mock-data/mock-data.ts");

export async function POST(req: NextRequest) {
  try {
    const newEvent = await req.json();

    // Read mock-data.ts file
    const fileData = await readFile(filePath, "utf-8");

    // Extract the array content from the export statement
    const arrayMatch = fileData.match(/export const mockEvents\s*=\s*(\[[\s\S]*?\]);/);

    if (!arrayMatch) throw new Error("Invalid file format");

    const existingArrayText = arrayMatch[1];
    const events = JSON.parse(existingArrayText);

    // Generate new ID and append the event
    newEvent.id = `event-${events.length + 1}`;
    events.push(newEvent);

    // Convert back to TypeScript export
    const newContent = `export const mockEvents = ${JSON.stringify(events, null, 2)};\n`;

    await writeFile(filePath, newContent, "utf-8");

    return NextResponse.json({ success: true, event: newEvent });
  } catch (error) {
    console.error("Error writing to file:", error);
    return NextResponse.json({ success: false, error: "Failed to save event" }, { status: 500 });
  }
}
