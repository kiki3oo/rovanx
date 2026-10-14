import { NextResponse, type NextRequest } from "next/server";
import { currencyForCountry } from "@/lib/geo-currency";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const pathname = request.nextUrl.pathname;
  const lowerPath = pathname.toLowerCase();

  // Instant block for common automated exploit scanners to protect CPU/RAM
  if (
    lowerPath.includes("wp-admin") ||
    lowerPath.includes("wp-login") ||
    lowerPath.includes("xmlrpc.php") ||
    lowerPath.includes(".env") ||
    lowerPath.includes("phpmyadmin") ||
    lowerPath.includes("/.git") ||
    lowerPath.includes("actuator") ||
    lowerPath.includes("cgi-bin")
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Support dedicated Ad Wheel subdomains (e.g. promo.rovanx.com/v1 or offre.rovanx.com/v1)
  const isWheelSubdomain =
    host.startsWith("promo.") || host.startsWith("offre.") || host.startsWith("vip.");

  let response: NextResponse;
  if (
    isWheelSubdomain &&
    !pathname.startsWith("/go") &&
    !pathname.startsWith("/brand") &&
    !pathname.startsWith("/products")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/go/v1" : `/go${pathname}`;
    response = NextResponse.rewrite(url);
  } else {
    response = NextResponse.next();
  }

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
  matcher: ["/((?!api|_next/static|_next/image|favicon.*|icon.png|apple-touch-icon.png|robots.txt|sitemap.xml).*)"]
};

