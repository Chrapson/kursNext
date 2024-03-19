"use client";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { ShoppingBag } from "lucide-react";
import { addProductToCartAction } from "@/actions/cart";

type Props = {
	productId: string;
};

export const ButtonAddToCartSmall = ({ productId }: Props) => {
	const { pending } = useFormStatus();

	return (
		<form
			className="mt-8 flex justify-end gap-4"
			action={() => {
				addProductToCartAction(productId)
					.then(() => {
						toast.success("Product added to cart successfully");
					})
					.catch((error) => {
						console.error(error);
						toast.error("Error adding product to cart");
					});
			}}
		>
			<input type="hidden" name="productId" value={productId} />
			<button
				disabled={pending}
				className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105 disabled:cursor-wait"
			>
				Add to cart
				<ShoppingBag size={24} color="black" />{" "}
			</button>
		</form>
	);
};
