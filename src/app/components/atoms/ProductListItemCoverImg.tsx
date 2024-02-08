import React from "react";
import Image from "next/image";

type ProductItemProps = {
	src: string;
	alt: string;
};

export const ProductListItemCoverImg = ({ src, alt }: ProductItemProps) => {
	return (
		<div className="border-10 mb-5 flex h-[200px] w-[200px] items-center justify-center">
			<Image className="max-h-full max-w-full" src={src} alt={alt} />
		</div>
	);
};
