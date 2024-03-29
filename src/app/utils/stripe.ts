import Stripe from "stripe";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { completeCart, getCartById } from "@/api/cart";

export const initStripe = () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe publishable key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
	return stripe;
};

export const retrieveCheckoutSession = async (
	stripe: Stripe,
	sessionId: string,
): Promise<Stripe.Response<Stripe.Checkout.Session>> => {
	const session = await stripe.checkout.sessions.retrieve(sessionId);
	return session;
};

export const createCheckoutSession = async (stripe: Stripe) => {
	const cart = await getCartById();
	if (!cart) {
		throw new Error("Cart not found");
	}
	const email = "";
	const HOST_URL = process.env.HOST_URL || "http://localhost:3000";
	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "blik", "p24"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
					images: item.product.images.map((image) => image.url),
					description: item.product.description,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: `${HOST_URL}/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `${HOST_URL}/cart`,
	});
	await completeCart(cart.id, email);
	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}

	if (checkoutSession.url) {
		cookies().set("cartId", "");
		redirect(checkoutSession.url);
	}
	return checkoutSession;
};
