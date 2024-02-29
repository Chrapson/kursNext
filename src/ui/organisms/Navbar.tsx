import { Gem, ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Searchbar } from "@/ui/atoms/Searchbar";
import { Suspense } from "react";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className=" max-w container mx-auto flex flex-col flex-wrap items-center justify-between py-5 md:flex-row">
			<Link
				href="/"
				className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
			>
				<Gem color="#0056d6" />
				<span className="ml-3 text-xl">E-shop</span>
			</Link>
			<nav className="flex flex-wrap items-center justify-center text-base font-semibold text-gray-700 md:ml-auto">
				<ul
					aria-label="menu"
					className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto"
				>
					<li>
						<Suspense>
							<Searchbar />
						</Suspense>
					</li>
					<li>
						<ActiveLink
							exact={true}
							href="/"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/products"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							All
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/collections"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Collections
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/categories"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Categories
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/categories/t-shirts"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							T-shirts
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/categories/hoodies"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Hoodies
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							href="/categories/accessories"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Accessories
						</ActiveLink>
					</li>
					{/* <li>
						<ActiveLink
							href="/privacy-policy"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Privacy policy
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							href="/regulations"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Regulations
						</ActiveLink>
					</li> */}
				</ul>
			</nav>
			<ShoppingCart />
		</div>
	);
};
