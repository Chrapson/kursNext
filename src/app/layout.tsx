import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/ui/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-shop",
	description: "You Can Buy Anything Here",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="max-w mx-auto-md p-12 ">
					<Navbar />
				</header>
				<section className="max-w mx-auto-md px-10 ">{children}</section>
				<footer className="mt-10 text-center">
					<p>&copy; 2023 E-shop</p>
				</footer>
			</body>
		</html>
	);
}
