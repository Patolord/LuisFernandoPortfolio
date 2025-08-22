import { redirect } from "next/navigation";

export default function RootPage() {
	// This page should never actually render because middleware will redirect
	// But we need it to exist for Next.js routing to work properly
	redirect("/en");
}
