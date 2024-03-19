import { handlePaymentAction } from "@/actions/cart";

export const PaymentButton = () => (
	<form action={handlePaymentAction}>
		<button
			type="submit"
			className="mt-4 w-full rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 py-2 text-center font-semibold text-white opacity-100 transition-all hover:bg-gray-800 hover:opacity-80"
		>
			Pay
		</button>
	</form>
);
