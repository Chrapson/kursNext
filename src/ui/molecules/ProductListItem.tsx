import { CardImage } from "@/ui/atoms/CardImage";
import { CardDescription } from "@/ui/atoms/CardDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { ButtonAddToCartSmall } from "@/ui/atoms/ButtonAddToCartSmall";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps): JSX.Element => (
	<li className="rounded-xl bg-gray-100 p-4 shadow-md">
		<article>
			<CardImage alt={product?.name} src={product.images[0]?.url || ""} />
			<CardDescription product={product} />
			<ButtonAddToCartSmall productId={product.id} />
		</article>
	</li>
);
