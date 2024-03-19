import { getCartById } from "@/api/cart";
import { ModalBackdrop } from "@/ui/atoms/ModalBackdrop";

import { CartModal } from "@/ui/organisms/CartModal";

const cartModalPage = async () => {
	const cart = await getCartById();
	if (!cart) {
		throw new Error("Cart not found");
	}

	return (
		<>
			<ModalBackdrop />
			<CartModal cart={cart} />
		</>
	);
};
export default cartModalPage;
