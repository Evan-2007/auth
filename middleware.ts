
import { NextResponse, NextRequest } from "next/server";
//import getAuth from "@/lib/auth/getAuth";

export async function middleware(req: NextRequest) {
   const auth = false;
 if (
    req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname === "/"
 ) {
//        const auth = getAuth(req);
    if (!auth) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
    if (req.nextUrl.pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
   return NextResponse.next();
  } }




 