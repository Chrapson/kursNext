import React from "react";
import Link from "next/link";
import type { ProductItemType } from "../../app/utils/types";
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc";
import { ProductListItemCoverImg } from "@/ui/atoms/ProductListItemCoverImg"; // Fixed import

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="transform cursor-pointer rounded-2xl border-8 transition-transform duration-500 hover:scale-110">
			<Link href={`/product/${product.id}`}>
				<article className="flex flex-col items-center justify-center py-5">
					<ProductListItemCoverImg src={product.coverImg.src} alt={product.coverImg.alt} />
					<ProductListItemDesc product={product} />
				</article>
			</Link>
		</li>
	);
};
