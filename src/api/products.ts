import { executeGraphQL } from "@/api/graphql";
import {
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	type ProductsListItemFragment,
	SuggestedProductsGetListDocument,
	type SortDirection,
	type ProductSortBy,
} from "@/gql/graphql";

export const getPaginatedListOfProducts = async (
	take: number,
	skip: number,
	order?: SortDirection,
	orderBy?: ProductSortBy,
) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			order,
			orderBy,
		},
		next: {
			revalidate: 15,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getPaginatedListOfProductsBySearch = async (search: string) => {
	if (!search.length || search.length <= 1) return;

	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListBySearchDocument,
		variables: {
			search,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getSuggestedProducts = async (currentProduct: ProductsListItemFragment) => {
	if (!currentProduct) return;

	const graphqlResponse = await executeGraphQL({ query: SuggestedProductsGetListDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch suggested products");
	}

	const suggestedProducts = graphqlResponse.products.data
		.filter(
			(p) =>
				p.categories.some((category) =>
					currentProduct.categories.some((prodCategory) => prodCategory.name === category.name),
				) && p.id !== currentProduct.id,
		)
		.slice(0, 4);

	return suggestedProducts;
};
