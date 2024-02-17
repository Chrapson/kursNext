import React from "react";
import type { ProductItemType } from "@/app/utils/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItemType[] }) => (
	<ul className="grid grid-cols-4 gap-8" data-testid="products-list">
		{products.map((product) => {
			return <ProductListItem key={product.id} product={product} />;
		})}
	</ul>
);
