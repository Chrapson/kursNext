import Link from "next/link";
import NextImage from "next/image";
import { type CartFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";
import { Rating } from "@/ui/atoms/Rating";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { ChangeProductQuantity } from "@/ui/atoms/ChangeProductQuantityButton";

type Props = {
	product: CartFragment["items"][number]["product"];
	isDescription?: boolean;
	cartId: string;
	quantity: number;
};

export const CartProduct = ({ cartId, quantity, product, isDescription }: Props) => (
	<div className="relative w-full rounded-xl bg-gray-100 p-4 shadow-md">
		<div className="flex gap-4">
			<div className="max-h-full max-w-full">
				<Link href={`/product/${product.id}`}>
					<NextImage
						src={product.images[0]?.url || ""}
						alt={product.name}
						width={300}
						height={300}
						className="h-full w-full rounded-md object-cover"
					/>
				</Link>
				{isDescription && (
					<div className="flex-start absolute right-4 top-4">
						<RemoveButton cartId={cartId} productId={product.id} />
					</div>
				)}
			</div>
			<div className="flex h-auto w-full flex-col justify-between">
				<Link href={`/product/${product.id}`} className="font-semibold hover:text-gray-600">
					<div className="flex justify-between">
						<div className="flex flex-col">
							{product.name}
							<Rating rating={product.rating || 0} />
						</div>
					</div>
					{isDescription && (
						<div className="mt-2 flex flex-col">
							<p>{product.description.slice(0, 400)}...</p>
							<p className="text-blue-600">(Click for more info)</p>
						</div>
					)}
					<div className="mt-2 flex justify-end">
						<p className="text-lg font-bold">{formatMoney((product.price / 100) * quantity)}</p>
					</div>
				</Link>
				<div className="mt-auto">
					{isDescription ? (
						<ChangeProductQuantity quantity={quantity} cartId={cartId} productId={product.id} />
					) : (
						<p className="text-sm font-bold">Quantity: {quantity}</p>
					)}
				</div>
			</div>
		</div>
	</div>
);
