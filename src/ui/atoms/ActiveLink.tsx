// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { type ReactNode } from "react";
// import { type Route } from "next";
// import clsx from "clsx";

// type ActiveLinkProps<T extends string> = {
// 	href: Route<T>;
// 	children: ReactNode;
// 	exact?: boolean;
// 	className?: string;
// 	activeClassName?: string;
// };

// export const ActiveLink = <T extends string>({
// 	href,
// 	children,
// 	exact = true,
// 	className = "text-blue-400 hover:text-blue-600 mr-4 ",
// 	activeClassName = "font-semibold underline",
// }: ActiveLinkProps<T>) => {
// 	const pathname = usePathname();

// 	const isActive = exact
// 		? pathname === href
// 		: pathname.startsWith(href) &&
// 			(pathname[href.length] === "/" || pathname.length === href.length);

// 	return (
// 		<Link
// 			href={href}
// 			className={clsx(className, isActive && activeClassName, "align-middle, justify-center")}
// 		>
// 			{children}
// 		</Link>
// 	);
// };
"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps<RouteInferType> = LinkProps<RouteInferType> & {
	children: string;
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = <RouteInferType,>({
	exact = true,
	children,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "text-blue-600 underline",
	href,
	...rest
}: ActiveLinkProps<RouteInferType>) => {
	const pathname = usePathname();

	const path = typeof href === "string" ? href : href.pathname;

	const isActive =
		(path && pathname && (exact ? pathname === path : pathname.startsWith(path))) || false;

	return (
		<Link
			{...rest}
			{...{ href }}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
			role="link"
		>
			{children}
		</Link>
	);
};
