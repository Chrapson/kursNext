import { executeGraphQL } from "@/api/graphql";
import { ProductGetItemByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const response = await executeGraphQL(ProductGetItemByIdDocument, { id });

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response.product;
};
