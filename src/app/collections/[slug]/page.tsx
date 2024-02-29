import { Suspense } from "react";
import { getCollectionBySlug } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";

type CollectionsPageProps = {
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({ params }: CollectionsPageProps) => {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return { title: "Collection" };
	return {
		title: collection.name,
		description: collection.description,
		openGraph: {
			title: collection.name,
		},
	};
};

export default async function CollectionPage({ params }: CollectionsPageProps) {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return <p>No collections found.</p>;

	return (
		<section>
			<div className="mb-8">
				<h1 className="text-3xl font-bold">{collection.name}</h1>
				<p className="italic">{collection.description}</p>
			</div>
			<Suspense key="collectionProducts" fallback={<LoadingSpinner />}>
				<ProductList products={collection.products} />
			</Suspense>
		</section>
	);
}
