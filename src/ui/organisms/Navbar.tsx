import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => (
	<nav>
		<ul className="flex gap-3">
			<li>
				<ActiveLink href="/" activeClassName="underline">
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink exact={false} href="/products" activeClassName="underline">
					All
				</ActiveLink>
			</li>
		</ul>
	</nav>
);
