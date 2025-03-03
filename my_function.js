export default async (req, context) => {
    const url = new URL(req.url);
    const name = url.searchParams.get('name') || "Guest"; // Fallback if name is not provided

    return new Response(JSON.stringify({ message: `${name} says hello!` }), {
        headers: { "Content-Type": "application/json" },
    });
};

