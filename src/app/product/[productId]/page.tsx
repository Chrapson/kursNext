import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { getProductById } from "@/api/product";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductListItemLargeImg } from "@/ui/atoms/ProductListItemLargeImg";
import { ProductsListItemFragment } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const data = (await getProductById(params.productId)) as ProductsListItemFragment;
	if (!data) return { title: "Product" };

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			title: data.name,
			description: data.description,
			images: [
				{
					url: data.images[0]?.url || "",
					alt: data.images[0]?.alt || "",
				},
			],
		},
	};
};

const productPage = async ({ params }: { params: { productId: string } }) => {
	const product = (await getProductById(params.productId)) as ProductsListItemFragment;
	return (
		<>
			<article className="mx-auto flex transform cursor-pointer items-center  justify-center py-5">
				<div className="flex flex-row gap-11">
					<ProductListItemLargeImg src={product.images[0]?.url} alt={product.images[0]?.alt} />
					<div className=" flex flex-col items-center justify-center gap-5 ">
						<h1 className="font-semibold">{product.name}</h1>
						{product.categories.map((category, index) => (
							<p key={index}>Category: {category.name}</p>
						))}
						<p>Price: {product.price} $</p>
						<p className="text-center">{product.description}</p>
					</div>
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
