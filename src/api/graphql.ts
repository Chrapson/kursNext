import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

type ExecuteGraphqlArgs<TResult, TVariables> = {
	query: TypedDocumentString<TResult, TVariables>;
	variables?: TVariables;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
};

export const executeGraphQL = async <TResult, TVariables>({
	query,
	variables,
	cache,
	headers,
	next,
}: ExecuteGraphqlArgs<TResult, TVariables>): Promise<TResult> => {
	const res = await fetch("https://graphql.hyperfunctor.com/graphql", {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
