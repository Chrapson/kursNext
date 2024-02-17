import React, { Suspense } from "react";
import { type Metadata } from "next/types";
import { getProductById } from "@/api/fetchProducts";
import { ProductListItemCoverImg } from "@/ui/atoms/ProductListItemCoverImg";
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

// export async function getStaticParams() {
// 	const products = await fetchProductsList();
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// }

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			type: "website",
			images: [
				{
					url: product.coverImg.src,
					alt: product.coverImg.alt,
				},
			],
		},
	};
};

const productPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="mx-auto flex transform  cursor-pointer items-center justify-center  py-5 ">
				<div className=" rounded-2xl border-8 p-10 transition-transform duration-500 hover:scale-110">
					<ProductListItemCoverImg src={product.coverImg.src} alt={product.coverImg.alt} />
					<ProductListItemDesc product={product} />
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
