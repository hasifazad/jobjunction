import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbxSgMZwxmwjtBqCERMZDoWNTd8G0FfkLWTHDF7C5N2QT65xRIUkMcIBz4X9pzD4GSpH/exec"
  );
  const data = await res.json();
  console.log(data);
  
  return NextResponse.json(data);
}
