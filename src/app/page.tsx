import { ProductList } from "@/app/components/organisms/ProductList";
import { ProductItemType } from "@/app/utils/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Battery",
		category: "Batteries",
		price: 5,
		coverImg: { src: "battery.png", alt: "battery" },
	},
	{
		id: "2",
		name: "Phone Charger",
		category: "Chargers",
		price: 10,
		coverImg: { src: "charger.png", alt: "charger" },
	},
	{
		id: "3",
		name: "Hard Disk Drive",
		category: "Storage",
		price: 50,
		coverImg: { src: "hdd.png", alt: "hdd" },
	},
	{
		id: "4",
		name: "Pendrive 2 Gb",
		category: "Storage",
		price: 20,
		coverImg: { src: "pendrive.png", alt: "keyboard" },
	},
];

export default function Home() {
	return (
		<section className="max-w mx-auto-md p-12 ">
			<ProductList products={products} />
		</section>
	);
}
