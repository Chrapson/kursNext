import Link from "next/link";
import { type CategoriesListItemFragment } from "@/gql/graphql";
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => (
	<li>
		<Link href={`/categories/${category.slug}`}>
			<article>
				<ProductListItemDesc name={category?.name} />
			</article>
		</Link>
	</li>
);
