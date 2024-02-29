import { executeGraphQL } from "@/api/graphql";
import { CategoriesGetListDocument, CategoryGetItemDocument } from "@/gql/graphql";

export const getListOfCategories = async () => {
	const graphqlResponse = await executeGraphQL(CategoriesGetListDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch categories");
	}

	return graphqlResponse.categories;
};

export const getCategoryProductsBySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphQL(CategoryGetItemDocument, { slug: categorySlug });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};