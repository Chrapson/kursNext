import { type ProductResponseItem } from "@/api/fetchProducts";

const PRODUCTS_PER_PAGE = 4;

export const fetchNumPages = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=50&offset=0");
	const data = (await res.json()) as ProductResponseItem[];
	const numPages = Math.ceil(data.length / PRODUCTS_PER_PAGE);
	return numPages;
};
