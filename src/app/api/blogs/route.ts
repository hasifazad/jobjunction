import { NextResponse } from "next/server";

// export async function GET() {
//   const res = await fetch(
//     "https://script.google.com/macros/s/AKfycbxSgMZwxmwjtBqCERMZDoWNTd8G0FfkLWTHDF7C5N2QT65xRIUkMcIBz4X9pzD4GSpH/exec"
//   );
//   const data = await res.json();


//   return NextResponse.json(data);
// }

export async function GET(req: Request) {

  let GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL

  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  const apiUrl = slug
    ? `${GOOGLE_SHEET_URL}?slug=${slug}`
    : `${GOOGLE_SHEET_URL}`;

  const res = await fetch(apiUrl, {
    next: { revalidate: 60 } // ISR cache
  });

  const data = await res.json();

  return NextResponse.json(data);
}
