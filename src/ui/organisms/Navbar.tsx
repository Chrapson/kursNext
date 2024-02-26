import { Gem, ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => {
	return (
		<div className=" container mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row">
			<a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
				<Gem color="#0056d6" />
				<span className="ml-3 text-xl">E-shop</span>
			</a>
			<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
				<ul
					aria-label="menu"
					className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto"
				>
					<li>
						<ActiveLink
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
							href="/collections"
							className="mr-5 hover:text-blue-600"
							activeClassName="text-blue-600"
						>
							Collections
						</ActiveLink>
					</li>
					<li>
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
					</li>
				</ul>
			</nav>
			<ShoppingCart />
		</div>
	);
};
