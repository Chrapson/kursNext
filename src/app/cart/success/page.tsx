import { redirect } from "next/navigation";
import { initStripe, retrieveCheckoutSession } from "@/app/utils/stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}
	const stripe = initStripe();
	const session = await retrieveCheckoutSession(stripe, searchParams.sessionId);
	return (
		<div className="m-auto flex w-1/2 flex-col items-center justify-center gap-8 rounded-md bg-gray-100 p-8 text-center font-semibold shadow-md lg:w-1/5">
			<h1>Thank you for your purchase</h1>
			<p>PAYMENT STATUS: {session.payment_status}</p>
		</div>
	);
}
