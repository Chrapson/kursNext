import { fetchNumPages } from "@/api/fetchNumPages";
import { ProductList } from "@/ui/organisms/ProductList";
import { fetchProductsList } from "@/api/fetchProducts";

export const generateStaticParams = async () => {
	const numPages = await fetchNumPages();
	const params = Array.from({ length: numPages }, (_, i) => ({
		params: { pagination: (i + 1).toString() },
	}));
	return params;
};

export default async function Products({ params }: { params: { page: number } }) {
	const products = await fetchProductsList(params.page);

	return <ProductList products={products} />;
}
