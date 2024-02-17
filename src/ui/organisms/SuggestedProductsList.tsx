import { fetchProductsList } from "@/api/fetchProducts";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProductsList = async () => {
	const products = await fetchProductsList();
	return <ProductList products={products.slice(-4)} />;
};
