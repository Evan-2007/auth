export function GET() {
    return new Response(
        JSON.stringify({
            status: 200,
            Headers: {
                'Content-Type': 'application/json',
            },

                message: 'allowed',

        })
    )
}