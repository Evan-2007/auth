import { NextResponse } from 'next/server';

export async function POST( req: Request, res: NextResponse ) {

    const body = await req.json();

    const valid = body.otp === '123456';


    if (valid) {
        return new Response(
            JSON.stringify({ message: 'OTP is valid' }),
            {
                status: 200, // Add the desired status code here
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    return new Response(
            JSON.stringify({ message: 'OTP is invalid'}),
        {
            status: 401, // Add the desired status code here
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