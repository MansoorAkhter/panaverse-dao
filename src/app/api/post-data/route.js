export async function POST(request) {
    let data = await request.json()
    let { name, profession, website } = data;
    return new Response(`I am ${name} & my profession is ${profession} & you can see my porfolio ${website}`)
}