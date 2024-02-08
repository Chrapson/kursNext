import React from "react";
import { ProductListItem } from "@/app/components/molecules/ProductListItem";
import { ProductItemType } from "@/app/utils/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => (
	<ul className="grid grid-cols-4 gap-8" data-testid="products-list">
		{products.map((product) => {
			return <ProductListItem key={product.id} product={product} />;
		})}
	</ul>
);
