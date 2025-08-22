import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["en", "pt-BR"];
const defaultLocale = "en";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => {
		negotiatorHeaders[key] = value;
	});

	// Use negotiator and intl-localematcher to get best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	);

	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	console.log("Middleware hit:", pathname);

	// Skip if the path has a file extension (static files)
	if (pathname.includes(".")) {
		console.log("Skipping file extension:", pathname);
		return;
	}

	// Check if there is any supported locale in the pathname
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) {
		console.log("Already has locale:", pathname);
		return;
	}

	// Redirect if there is no locale
	const locale = getLocale(request);
	console.log("Redirecting to locale:", locale, "from:", pathname);

	// Handle root path specifically
	if (pathname === "/") {
		request.nextUrl.pathname = `/${locale}`;
	} else {
		request.nextUrl.pathname = `/${locale}${pathname}`;
	}

	console.log("New pathname:", request.nextUrl.pathname);
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next|api|favicon.ico|public|models|.*\\..*|_vercel).*)",
	],
};
