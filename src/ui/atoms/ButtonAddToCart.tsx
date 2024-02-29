import { ShoppingBag } from "lucide-react";

export const ButtonAddToCart = () => (
	<button className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105">
		Add to cart
		<ShoppingBag size={24} color="black" />
	</button>
);
