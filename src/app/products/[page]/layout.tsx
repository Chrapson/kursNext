import { Pagination } from "@/ui/organisms/Pagination";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<section>{children}</section>
			<div className="mt-10">
				<Pagination numberOfPages={10} />
			</div>
		</section>
	);
}
