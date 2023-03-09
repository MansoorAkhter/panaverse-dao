export async function GET(request, { params }) {
    const { slug } = params;

    return new Response(`Salam from dynamic route: ${slug}`)
}