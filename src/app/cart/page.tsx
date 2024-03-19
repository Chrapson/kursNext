import { getCartById } from "@/api/cart";
import { PaymentButton } from "@/ui/molecules/PaymentButton";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { formatMoney } from "@/utils/formatMoney";

export default async function CartPage() {
	const cart = await getCartById();
	if (!cart || !cart.items.length) {
		return <p>Cart is empty</p>;
	}

	const total = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
	return (
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<h1 className="mb-4 w-fit rounded-md bg-gray-400 p-1.5 text-2xl font-bold text-white">
				Order #{cart.id.slice(0, 8)}
			</h1>
			<div className="flex flex-col justify-around gap-8 lg:flex-row ">
				<article className=" flex w-3/5 flex-col">
					<CartProductList cart={cart} isDescription />
				</article>
				<aside className="flex h-[150px]  flex-col rounded-md bg-gray-100 p-8 shadow-md lg:w-1/5">
					<div className="flex items-center justify-between font-semibold">
						<p>Total amount:</p>
						<span>{formatMoney(total / 100)}</span>
					</div>
					<PaymentButton />
				</aside>
			</div>
		</section>
	);
}
