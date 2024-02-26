import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProductsList = async () => {
	const products = await getPaginatedListOfProducts(4, 0);
	return <ProductList products={products.data} />;
};
