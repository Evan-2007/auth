import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { createSession } from '@/lib/auth/session';
import bcrypt from 'bcrypt';
import { HeartOff } from 'lucide-react';


interface ReqBody {
    username?: string;
    password?: string;
    email?: string;
    otp?: number;
}

export async function POST(req: NextRequest) {
    const { username, password, email, otp }= await <ReqBody>req.json();
    console.log(username, password, email, otp);

    if (!username || !password || !email || !otp) {
        return new Response("Missing required fields", { status: 400 });
    }

    let permissions: string[] = [];
    let groups: string[] = [];
    try {
        const validOtp = await db.invite.findFirst({
            where: {
                code: otp
            },
            select: {
                groups: {
                    select: {
                        id: true
                    }
                },
                permissions: {
                    select: {
                        id: true
                    }
                },
                code: true
            }
        });
        if (validOtp === null) {
            return new Response("Invalid OTP", { status: 400 });
        }
        permissions = validOtp.permissions.map((perm) => perm.id);
        groups = validOtp.groups.map((group) => group.id);
    } catch (e) {
        return new Response("Error checking OTP", { status: 500 });
    }

    try {
        const existingUser = await db.user.findFirst({
            where: {
                OR: [
                    {
                        name: username
                    },
                    {
                        email: email
                    }
                ]
            }
        });
        if (existingUser) {
            return new Response("User already exists", { status: 400 });
        }
    }
    catch (e) {
        return new Response("Error checking for existing user", { status: 500 });
    }



    try { 
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.user.create({
            data: {
                name: username,
                password: hashedPassword,
                email: email,
                permissions: {
                    connect: permissions.map((perm) => {
                        return {
                            id: perm
                        }
                    })
                },
                groups: {
                    connect: groups.map((group) => {
                        return {
                            id: group
                        }
                    })
                }
            }
        });
    }
    catch (e) {
        return new Response("Error creating user", { status: 500 });
    }

    const session = await createSession(username);

    if (session.error) {
        return new Response("Error creating session", { status: 500 });
    }

    const headers = new Headers();
    headers.append('Set-Cookie', `session=${session.sessionId}; HttpOnly; Secure; SameSite=Strict`);
    headers.append('Set-Cookie', `token=${session.token}; HttpOnly; Secure; SameSite=Strict`);

    return new Response(JSON.stringify(session), { status: 200, headers });
}