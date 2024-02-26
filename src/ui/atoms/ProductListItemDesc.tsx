import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductListItemDescProps = {
	name: string;
	price?: number;
	categories?: ProductsListItemFragment["categories"];
	isSuggestedProduct?: boolean;
};

export const ProductListItemDesc = ({
	name,
	price,
	categories,
	isSuggestedProduct,
}: ProductListItemDescProps): JSX.Element => (
	<div className="mt-2 flex flex-col">
		{isSuggestedProduct ? (
			<h2 className="font-semibold text-gray-700">{name}</h2>
		) : (
			<h1 className="font-semibold text-gray-700">{name}</h1>
		)}
		{categories && (
			<p className="text-sm text-gray-500">
				{categories.map((category) => category.name).join(", ")}
			</p>
		)}
		{price && <p className="text-sm font-medium text-gray-700">{price / 100}</p>}
	</div>
);
