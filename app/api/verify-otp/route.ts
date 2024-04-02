import { request } from 'http';
import { NextResponse } from 'next/server';

export async function POST( req: Request, res: NextResponse ) {

    const body = await req.body

    return new Response(
        JSON.stringify({ body }),
        {
            status: 405, // Add the desired status code here
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

}

export function GET(req: Request, res: NextResponse) {
    return new Response(
        JSON.stringify({ message: 'Hello World' }),
        {
            status: 405, // Add the desired status code here
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}