import { NextResponse, NextRequest } from "next/server";
//import getAuth from "@/lib/auth/getAuth";

export async function middleware(req: NextRequest) {
 if (
    req.nextUrl.pathname.startsWith("/dashboard")
 ) {
    const res = NextResponse.next();
    return res;
//    const auth = getAuth(req);
//    if (!auth) {
//      return NextResponse.redirect("/auth/login");
//    }
  } }




 