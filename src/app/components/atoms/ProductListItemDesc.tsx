import { ProductItemType } from "@/app/utils/types";
import React from "react";

type ProductListItemDescProps = {
	product: ProductItemType;
};

export const ProductListItemDesc = ({
	product: { name, category, price },
}: ProductListItemDescProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h3>{name}</h3>
			<p>Category: {category}</p>
			<p>Price: {price} $</p>
		</div>
	);
};
