import NextImage from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";
import { formatMoney } from "@/utils/formatMoney";
import { ButtonAddToCart } from "@/ui/atoms/ButtonAddToCart";

type ProductItemProps = {
	product: ProductsListItemFragment;
};

export const ProductItem = ({ product }: ProductItemProps) => (
	<section className="flex w-full flex-col gap-12 md:flex-row md:gap-24">
		<div className="flex flex-shrink-0 justify-center rounded-xl bg-gray-100 px-24 py-12">
			<NextImage
				className="object-cover mix-blend-multiply"
				src={product.images[0]?.url || ""}
				alt={product.name}
				width={500}
				height={300}
			/>
		</div>
		<div className="flex flex-1 flex-col justify-between pb-8 sm:pb-0">
			<div className="flex flex-col">
				<p>{product.categories[0]?.name}</p>
				<div className="flex items-center gap-4 md:gap-24">
					<h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
					<p className="rounded-lg bg-gray-600 px-2 text-xl text-white">
						{formatMoney(product.price / 100)}
					</p>
				</div>
				{product?.rating && (
					<div className="mt-2">
						<Rating rating={product.rating} />
					</div>
				)}
				<p className="text-md mt-4 italic text-gray-500">{product.description}</p>
				<p className="text-md mt-4">{product.description}</p>
			</div>
			<ButtonAddToCart productId={product.id} />
		</div>
	</section>
);
