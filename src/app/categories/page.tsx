import { Suspense } from "react";
import { type Metadata } from "next";
import { getListOfCategories } from "@/api/categories";
import { CategoryList } from "@/ui/organisms/CategoryList";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";

export const metadata: Metadata = {
	title: "Categories",
	description: "List of all categories",
	openGraph: {
		title: "Categories",
		description: "List of all categories",
	},
};

export default async function CategoriesPage() {
	const categoriesList = await getListOfCategories();
	if (!categoriesList || categoriesList.data.length === 0) return <p>No categories found.</p>;

	return (
		<section>
			<Suspense key="categories" fallback={<LoadingSpinner />}>
				<CategoryList categories={categoriesList.data} />
			</Suspense>
		</section>
	);
}
