import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductReviewsById } from "@/api/product";
import { getSuggestedProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { Reviews } from "@/ui/organisms/Reviews";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const data = await getProductById(params.id);
	if (!data.product) return { title: "Product" };

	return {
		title: data.product.name,
		description: data.product.description,
	};
};

export default async function ProductPage({ params }: Params) {
	const data = await getProductById(params.id);

	if (!data.product) return <p>Product not found.</p>;

	const suggestedProducts = await getSuggestedProducts(data.product);
	const productReviews = await getProductReviewsById(data.product.id);

	return (
		<section>
			<Suspense key="product" fallback={<LoadingSpinner />}>
				<div>
					<ProductItem product={data.product} />
					<p className="hidden">{data.product.description}</p>
				</div>
			</Suspense>
			<Suspense key="suggestedProducts" fallback={<LoadingSpinner />}>
				{suggestedProducts && (
					<div data-testid="related-products" className="my-8 border-t">
						<h2 className="my-4 w-fit rounded-xl bg-black p-1.5 text-3xl font-bold text-white">
							Related products
						</h2>
						<ProductList products={suggestedProducts} />
					</div>
				)}
			</Suspense>
			{productReviews.product?.reviews && (
				<Reviews product={data.product} reviews={productReviews.product.reviews} />
			)}
		</section>
	);
}
