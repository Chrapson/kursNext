import { type ProductItemType } from "@/app/utils/types";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};
export const fetchProductsList = async (offset = 1, take = 4) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}${
			offset ? `&offset=${(offset - 1) * take}` : ""
		}`,
	);
	const productsRes = (await res.json()) as ProductResponseItem[];
	const productsList = productsRes.map((product) => productResponseItemToProductItemType(product));
	return productsList;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productRes = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productRes);
};

export const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImg: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};
