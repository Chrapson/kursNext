"use client";
import { useRouter } from "next/navigation";

export const ModalBackdrop = () => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<div
			onClick={handleClick}
			className="fixed inset-0 z-10 bg-gray-600 bg-opacity-20 transition-all duration-1000"
		/>
	);
};
