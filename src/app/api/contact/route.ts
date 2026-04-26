import { NextResponse } from "next/server";

export async function POST(req: Request) {
    let GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL

    const data = await req.json();

    const formBody = new URLSearchParams();
    formBody.append("name", data.name);
    formBody.append("email", data.email);
    formBody.append("mobile", data.mobile);
    formBody.append("message", data.message);


    await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", },

        body: formBody.toString()
    });

    return NextResponse.json({ success: true });
}
