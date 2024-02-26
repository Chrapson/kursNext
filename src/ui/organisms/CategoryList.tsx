import { type Route } from "next";
import { type CategoriesListItemFragment } from "@/gql/graphql";
import { PageLink } from "@/ui/atoms/PageLink";

type CategoryListProps = {
	categories: CategoriesListItemFragment[];
};

export const CategoryList = ({ categories }: CategoryListProps): JSX.Element => (
	<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		{categories.map((category) => (
			<PageLink
				name={category.name}
				key={category.id}
				href={`/categories/${category.slug}/1` as Route}
			/>
		))}
	</ul>
);
