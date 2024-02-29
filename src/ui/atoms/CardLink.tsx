import { type Route } from "next";
import Link from "next/link";

type CardLinkProps = {
	href: Route;
	name: string;
	src: string;
};

export const CardLink = ({ href, name }: CardLinkProps) => (
	<Link
		className="group relative
	 mt-10 transition-transform hover:scale-105"
		href={href}
	>
		<figure className="h-[340px]">
			<li
				className="h-full w-full rounded-xl object-cover transition-all
				hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
			></li>
			<h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-xl bg-white p-1.5 text-2xl font-bold italic transition-all group-hover:bg-black group-hover:text-white md:text-3xl">
				{name}
			</h2>
		</figure>
	</Link>
);
