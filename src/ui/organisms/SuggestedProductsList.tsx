import { getPaginatedListOfProducts } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProductsList = async () => {
	const data = await getPaginatedListOfProducts(4, 0);
	const products = data.data;
	return (
		<>
			<h2 className="title-font mb-1 text-2xl font-medium text-gray-900">
				Other products you may like:
			</h2>
			<ul
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="related-products"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</>
	);
};
