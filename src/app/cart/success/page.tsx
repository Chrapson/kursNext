import { redirect } from "next/navigation";
import { getCartById } from "@/api/cart";
import { initStripe, retrieveCheckoutSession } from "@/app/utils/stripe";

type CartSuccessPageProps = {
	searchParams: {
		sessionId?: string;
	};
};

export default async function CartSuccessPage({ searchParams }: CartSuccessPageProps) {
	const cart = await getCartById();
	if (!cart || !cart.items.length) {
		return <p>Cannot find order ID</p>;
	}
	if (!searchParams.sessionId) {
		redirect("/");
	}

	const stripe = initStripe();
	const session = await retrieveCheckoutSession(stripe, searchParams.sessionId);

	return (
		<div className="m-auto flex w-1/2 flex-col items-center justify-center gap-8 rounded-md bg-gray-100 p-8 text-center font-semibold shadow-md lg:w-1/5">
			<h1>Thank you for your purchase for Order #{cart.id.slice(0, 8)}</h1>
			<p>PAYMENT STATUS: {session.payment_status}</p>
		</div>
	);
}
