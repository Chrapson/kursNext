import Link from "next/link";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductListItemCoverImg } from "@/ui/atoms/ProductListItemCoverImg";
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc";

type ProductListItemProps = {
	product: ProductsListItemFragment;
	isSuggestedProduct?: boolean;
};

export const ProductListItem = ({ product, isSuggestedProduct }: ProductListItemProps) => (
	<li>
		<Link href={`/product/${product.id}`}>
			<article>
				<ProductListItemCoverImg
					alt={product?.images[0]?.alt || ""}
					src={product?.images[0]?.url || ""}
				/>
				<ProductListItemDesc
					name={product?.name}
					price={product?.price}
					categories={product?.categories}
					isSuggestedProduct={isSuggestedProduct}
				/>
			</article>
		</Link>
	</li>
);
