import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();

    await fetch('https://script.google.com/macros/s/AKfycbzdOvQz_3S36dIrSwI1muUU5CvIMrdDV3TKLbK8pGwzk5bfPlutZL3SBwm8yKAq3FEl/exec', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    return NextResponse.json({ success: true });
}
