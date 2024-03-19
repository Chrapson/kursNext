import { executeGraphQL } from "@/api/graphql";
import { CollectionsGetListDocument, CollectionGetItemDocument } from "@/gql/graphql";

export const getListOfCollections = async () => {
	const graphqlResponse = await executeGraphQL({ query: CollectionsGetListDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collections");
	}

	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionGetItemDocument,
		variables: { slug },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collection");
	}

	return graphqlResponse.collection;
};
