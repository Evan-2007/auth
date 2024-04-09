
import { url } from "inspector";
import { NextResponse, NextRequest } from "next/server";
import {getSession} from "@/lib/auth/session";

export async function middleware(req: NextRequest) {

   const session = await getSession(req);
   const auth = {
      state: false,
      Permissions: ["user"],
   }
 if (
    req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname === "/" || req.nextUrl.pathname.startsWith("/auth")
 ) {
//        const auth = getAuth(req);

    if (!auth.state && !req.nextUrl.pathname.startsWith("/auth")) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
    if (req.nextUrl.pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
   }

      if (auth.state && req.nextUrl.pathname.startsWith("/auth")) {
         const url = req.nextUrl.clone();
         url.pathname = "/dashboard";
         return NextResponse.redirect(url);
      }


   return NextResponse.next();
  }
  
  

  if (req.nextUrl.pathname.startsWith("/api")) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
      const path = req.nextUrl.pathname;
      const route = apiAuthSchema.routes.find((route) => route.path === path);
      if (!route) {
         return NextResponse.next();
      }
      if (route.Permissions.some((permission) => auth.Permissions.includes(permission))) {
         return NextResponse.next();
      }
      if (route.Permissions.includes("any")) {
         return NextResponse.next();
      }
      return new Response("Unauthorized", { status: 401 });
  }
}



const apiAuthSchema = {
   routes: [
       {
          path: "/api/auth",
          Permissions: ["any"],
       },
       {
          path: "/api/account",
            Permissions: ["user"],
       },
       {
         path: "/api/invite",
         Permissions: ["invites"],
       },
    ],
};


 