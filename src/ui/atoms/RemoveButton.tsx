"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { removeItemFromCart } from "@/actions/cart";

type RemoveButtonProps = {
	cartId: string;
	productId: string;
};

export const RemoveButton = ({ cartId, productId }: RemoveButtonProps) => {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="text-red disabled:text-slate-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItemFromCart(cartId, productId);
				});
			}}
		>
			<Trash2 size={16} color="red" />
		</button>
	);
};
