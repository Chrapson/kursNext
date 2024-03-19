import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/ui/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-shop",
	description: "You Can Buy Anything Here",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<header className="   sticky top-0  z-10 mx-auto mb-5 border-b border-gray-200  bg-gray-400 bg-opacity-15 px-2 backdrop-blur-sm backdrop-filter">
					<Navbar />
				</header>
				<Toaster />
				<section className="container mx-auto ">{children}</section>
				<footer className="my-10 text-center">
					<p>&copy; 2023 E-shop</p>
				</footer>
				{modal}
			</body>
		</html>
	);
}
