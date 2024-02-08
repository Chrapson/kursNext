import React from "react";
import { ProductListItemDesc } from "@/app/components/atoms/ProductListItemDesc";
import { ProductListItemCoverImg } from "@/app/components/atoms/ProductListItemCoverImg"; // Fixed import
import { ProductItemType } from "../../utils/types";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="transform cursor-pointer rounded-2xl border-8 transition-transform duration-500 hover:scale-110">
			<article className="flex flex-col items-center justify-center py-5">
				<ProductListItemCoverImg src={product.coverImg.src} alt={product.coverImg.alt} />
				<ProductListItemDesc product={product} />
			</article>
		</li>
	);
};
