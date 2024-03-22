import { type CartFragment } from "@/gql/graphql";
import { PaymentButton } from "@/ui/molecules/PaymentButton";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { formatMoney } from "@/utils/formatMoney";

type ModalProps = {
	cart: CartFragment;
};

export const CartModal = ({ cart }: ModalProps) => {
	const total =
		cart && cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

	return (
		<aside className="fixed inset-y-0 right-0 z-50 flex w-[450px] flex-col bg-white p-4 shadow-lg transition-all duration-1000 ease-in-out">
			<div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
				<h3 className="text-lg font-semibold">Cart:</h3>
				<a
					href="/cart"
					className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
				>
					View
				</a>
			</div>
			<div className="flex-1 overflow-auto py-4">
				{!cart ? <p>Cart is empty</p> : <CartProductList cart={cart} />}
			</div>
			{cart && (
				<div className="flex w-full flex-col justify-end border-t border-gray-200 py-4">
					<div className="flex w-full items-center justify-between font-semibold">
						<p>Total:</p>
						<p>{formatMoney(total / 100)}</p>
					</div>
					<PaymentButton />
				</div>
			)}
		</aside>
	);
};
