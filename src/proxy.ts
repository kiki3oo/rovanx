import { NextResponse, type NextRequest } from "next/server";
import { currencyForCountry } from "@/lib/geo-currency";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const hasCurrencyCookie = request.cookies.has("rovanx-currency");
  const hasDefaultCookie = request.cookies.has("rovanx-currency-default");

  if (!hasCurrencyCookie && !hasDefaultCookie) {
    const country =
      request.headers.get("cf-ipcountry") ||
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("x-country-code");

    response.cookies.set("rovanx-currency-default", currencyForCountry(country), {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax"
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg|robots.txt|sitemap.xml).*)"]
};
