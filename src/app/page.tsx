import { type Metadata } from "next";
import { Suspense } from "react";
// import { getCollectionsList } from "@/api/collections";
// import { CollectionList } from "@/ui/organisms/CollectionList";
// import { Spinner } from "@/ui/atoms/Spinner";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const metadata: Metadata = {
	title: "Next.js 14 Masters - Home",
	description: "Welcome to the Next.js 14 Masters course!",
	openGraph: {
		title: "Next.js 14 Masters - Home",
		description: "Welcome to the Next.js 14 Masters course!",
	},
};
export default async function HomePage() {
	const products = await getPaginatedListOfProducts(8, 0);
	// const collections = await getCollectionsList();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	// if (!collections || collections.data.length === 0) return <p>No collections found.</p>;

	return (
		<section>
			<h1 className="mb-4 text-3xl font-bold">New collections</h1>
			{/* <Suspense key="collectionList" fallback={<Spinner />}>
				<CollectionList collections={collections.data} />
			</Suspense> */}
			<Suspense key="productsListHome" fallback={"/*<Spinner />*/"}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
