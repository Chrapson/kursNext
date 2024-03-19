"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

export const Searchbar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("query")?.toString();
	const [searchValue, setSearchValue] = useState<string>(urlQueryParamValue ?? "");
	const debouncedSearch = useDebounce(searchValue);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		if (event.target.value.length === 0) {
			router.push("/products");
		}
	};

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);
	return (
		<div className="flex items-center justify-center gap-2 rounded-md border bg-white  ">
			<div className="flex h-full w-[40px] cursor-pointer items-center justify-center border-r bg-white hover:animate-pulse">
				<SearchIcon color="gray" size={16} />
			</div>
			<input
				className="w-42 transform rounded-md p-1 text-sm outline-none transition-all
				duration-500 focus:w-96 focus:flex-1  focus:pr-12"
				type="search"
				id="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};
