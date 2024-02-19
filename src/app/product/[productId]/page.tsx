import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { fetchProductsList, getProductById } from "@/api/fetchProducts";
import { ProductListItemCoverImg } from "@/ui/atoms/ProductListItemCoverImg";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export const generateStaticParams = async () => {
	const products = await fetchProductsList();
	return products
		.map((product) => {
			return {
				productId: product.id,
			};
		})
		.slice(0, 3);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) {
		notFound();
	}

	const { name, description } = product;

	return {
		title: name,
		description: description,
	};
};

const productPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="mx-auto flex max-w-5 transform cursor-pointer items-center  justify-center py-5">
				<div className=" flex flex-col items-center justify-center rounded-2xl border-8 p-10 transition-transform duration-500 hover:scale-110">
					<ProductListItemCoverImg src={product.coverImg.src} alt={product.name} />
					<h1 className="font-semibold">{product.name}</h1>
					<p>Category: {product.category}</p>
					<p>Price: {product.price} $</p>
					<p className="text-center">{product.description}</p>
				</div>
			</article>
			<aside className="px-10 py-5">
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
};
export default productPage;
