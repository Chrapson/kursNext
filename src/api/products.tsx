import { executeGraphQL } from "@/api/graphql";
import { Category } from "../gql/graphql";
import {
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	type ProductsListItemFragment,
	ProductsGetSuggestedListDocument,
} from "@/gql/graphql";

export const getPaginatedListOfProducts = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {
		take,
		skip,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getPaginatedListOfProductsBySearch = async (search: string) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListBySearchDocument, {
		search,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getSuggestedProducts = async (product: ProductsListItemFragment) => {
	if (!product) return;

	const graphqlResponse = await executeGraphQL(ProductsGetSuggestedListDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	const suggestedProducts = graphqlResponse.products.data.filter(
		(products: ProductsListItemFragment) =>
			products.categories.some((category) => category.name === product.categories[0]?.name),
	);
	return suggestedProducts.slice(0, 4);
};
