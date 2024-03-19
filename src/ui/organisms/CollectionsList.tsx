import type { Route } from "next";
import type { CollectionsGetListItemFragment } from "@/gql/graphql";
import { CardLink } from "@/ui/atoms/CardLink";

type CollectionsListProps = {
	collections: CollectionsGetListItemFragment[];
};
export const CollectionsList = ({ collections }: CollectionsListProps) => {
	return (
		<ul className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
			{collections.map((collection) => (
				<CardLink
					key={collection.id}
					href={`/collections/${collection.slug}` as Route}
					name={collection.name}
					// src={`/${collection.slug}.avif`}
					src=""
				/>
			))}
		</ul>
	);
};
