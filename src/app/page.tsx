import { type Metadata } from "next";
import { Suspense } from "react";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";
import CollectionsList from "@/ui/organisms/CollectionsList";
import { getListOfCollections } from "@/api/collections";

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
	const collections = await getListOfCollections();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	if (!collections || collections.data.length === 0) return <p>No collections found.</p>;

	return (
		<>
			<section className="">
				<h1 className="w-fit rounded-xl bg-black p-1.5 text-3xl font-bold text-white">
					New collections
				</h1>
				<Suspense key="collectionList" fallback={<LoadingSpinner />}>
					<CollectionsList collections={collections.data} />
				</Suspense>
			</section>
			<section>
				<Suspense key="productsListHome" fallback={<LoadingSpinner />}>
					<div className="mt-10">
						<ProductList products={products.data} />
					</div>
				</Suspense>
			</section>
		</>
	);
}
