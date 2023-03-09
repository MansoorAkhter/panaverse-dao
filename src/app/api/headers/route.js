import { headers } from "next/headers";

export async function GET(request) {
    const headerList = headers();
    const host = headerList.get("Host");

    return new Response(`Request from ${host}`, {
        status: 200,
        headers: { host }
    });
}
