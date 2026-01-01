import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();

    const formBody = new URLSearchParams();
    formBody.append("name", data.name);
    formBody.append("email", data.email);
    formBody.append("mobile", data.mobile);
    formBody.append("message", data.message);


    await fetch('https://script.google.com/macros/s/AKfycbzdOvQz_3S36dIrSwI1muUU5CvIMrdDV3TKLbK8pGwzk5bfPlutZL3SBwm8yKAq3FEl/exec', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", },

        body: formBody.toString()
    });

    return NextResponse.json({ success: true });
}
