import { notFound } from "next/navigation";
import { ComponentType } from "react";

const StaticPage = async ({ params }: { params: { filename: string } }) => {
	const Page = await import(`./${params.filename}.mdx`).then(
		(mod: { default: ComponentType }) => mod.default,
		() => notFound(),
	);
	return (
		<article className="prose prose-lg">
			<Page />
		</article>
	);
};

export default StaticPage;
