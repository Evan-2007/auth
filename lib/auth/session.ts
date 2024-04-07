import db from "@/lib/db";
import * as crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { NextRequest } from "next/server";

interface CreateSession {
    sessionId?: string;
    token?: string;
    error?: string;
}
export async function createSession(username: string): Promise<CreateSession> {
    const sessionId: string = uuidv4();
    const token: string = crypto.randomBytes(16).toString('hex');
    const hashedToken = bcrypt.hashSync(token, 10);

    try {
        await db.session.create({
            data: {
                id: sessionId,
                token: hashedToken,
                userName: username,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
            }
        });
    } catch (error: any) {
        return { error: error.message };
    }

    return {
        sessionId: sessionId,
        token: token
    }
}



interface GetSession {
    error?: string;
    session?: {
        token?: string;
        expires?: Date;
        User?: {
            groups?: {
                name?: string;
                permissions?: {
                    apps?: {
                        name?: string;
                        id?: string;
                        url?: string;
                    }[]
                }[]
                rules?: {
                    name?: string;
                    id?: string;
                    appId?: string;
                    path?: string;
                    type?: string;
                    App?: {
                        name?: string;
                        id?: string;
                        url?: string;
                    }
                }[]
            }[]
            permissions?: {
                apps?: {
                    name?: string;
                    id?: string;
                    url?: string;
                }[]
            }
            rules?: {
                name?: string;
                id?: string;
                appId?: string;
                path?: string;
                type?: string;
                App?: {
                    name?: string;
                    id?: string;
                    url?: string;
                }
            }[]
        }
    }
}

export async function getSession(req: NextRequest): Promise<GetSession> {
    const sessionId = req.cookies.get('session')?.value;
    const token = req.cookies.get('token')?.value;
    console.log(sessionId, token);
    if (typeof sessionId !== 'string') {
        return { error: 'Session not found' };
    }
    try {
        const session = await db.session.findUnique({
            where: {
                id: sessionId
            },
            select: {
                token: true,
                expires: true,
                User: {
                    select: {
                        groups: {
                            select: {
                                name: true,
                                permissions: {
                                    select: {
                                        apps: {
                                            select: {
                                                name: true,
                                                id: true,
                                                url: true,
                                            }
                                        },
                                    }
                                },
                                rules: {
                                    select: {
                                        name: true,
                                        id: true,
                                        appId: true,
                                        path: true,
                                        type: true,
                                        App: {
                                            select: {
                                                name: true,
                                                id: true,
                                                url: true,
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        permissions: {
                            select: {
                                apps: {
                                    select: {
                                        name: true,
                                        id: true,
                                        url: true,
                                    }
                                }
                            }
                        },
                        rules: {
                            select: {
                                name: true,
                                id: true,
                                appId: true,
                                path: true,
                                type: true,
                                App: {
                                    select: {
                                        name: true,
                                        id: true,
                                        url: true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        if (!session?.token) {
            return { error: 'Session not found' };
        }

        if (session.expires < new Date()) {
            return { error: 'Session expired' };
        }

        const hashMatch = bcrypt.compareSync(token, session.token);

        if (!hashMatch) {
            return { error: 'Invalid token' };
        }

        return {
            session: {
                token: session.token,
                expires: session.expires,
                User: {
                    groups: session.User.groups,
                    permissions: session.User.permissions as { apps?: { name?: string | undefined; id?: string | undefined; url?: string | undefined; }[] | undefined; },
                    rules: session.User.rules
                }
            }
        }
    } catch (error: any) {
        return { error: error.message };
    }
}