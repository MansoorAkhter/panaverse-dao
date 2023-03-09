import { cookies } from "next/headers";

export async function GET(request) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    return new Response(`Hello from cookies route handler ${token.value}`, {
        status: 200,
        headers: { "set-Cookie": `token=${token.value}-modified!` },
    });
}
