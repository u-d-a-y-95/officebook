// export { default } from "next-auth/middleware";

import { NextRequest, NextResponse } from "next/server";

export const config = { matcher: ["/"] };

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token");
  if (!cookie)
    return NextResponse.redirect(new URL("/auth/signin", request.url));
}
