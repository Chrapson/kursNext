import { type Route } from "next";
import Link from "next/link";
import NextImage from "next/image";

type CardLinkProps = {
	href: Route;
	name: string;
	src: string;
};

export const CardLink = ({ href, name, src }: CardLinkProps) => (
	<li>
		<Link className="group relative" href={href}>
			<figure className="h-[250px]">
				<NextImage
					width={300}
					height={250}
					alt={name}
					src={src}
					className="h-full w-full rounded-xl object-cover transition-all hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
				/>
				<h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-xl bg-white p-1.5 text-2xl font-bold italic transition-all group-hover:bg-black group-hover:text-white md:text-3xl">
					{name}
				</h2>
			</figure>
		</Link>
	</li>
);
