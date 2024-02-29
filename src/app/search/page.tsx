import { Suspense } from "react";
import { getPaginatedListOfProductsBySearch } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
	return {
		title: `Search results for: ${searchParams.query}`,
		description: `Search results for: ${searchParams.query}`,
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	if (searchParams.query.length < 2) {
		return <p>Please enter at least 2 characters to search.</p>;
	}
	const products = await getPaginatedListOfProductsBySearch(searchParams.query);

	if (!products || products.data.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<Suspense key="searchPage" fallback={<LoadingSpinner />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
