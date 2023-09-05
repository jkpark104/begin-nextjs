import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행됩니다.");

  if (request.nextUrl.pathname === "/products/1004") {
    console.log("미들웨어 - 경로를 /products로 변경합니다.");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
