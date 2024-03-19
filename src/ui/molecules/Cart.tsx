import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCartById } from "@/api/cart";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";

export const Cart = async () => {
	const cart = await getCartById();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink className="flex gap-2" activeClassName="text-blue-600" href="/cart">
			<ShoppingCart size={24} color="black" />
			<Suspense key="headerQuantity" fallback={<LoadingSpinner />}>
				<div className="font-bold ">{quantity}</div>
			</Suspense>
		</ActiveLink>
	);
};
