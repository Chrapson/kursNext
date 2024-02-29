"use client";

import { SearchIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { useDebounce } from "use-debounce";

export const Searchbar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("query")?.toString();
	const [searchValue, setSearchValue] = useState<string>(urlQueryParamValue || "");

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const [debouncedSearch] = useDebounce(searchValue, 1500);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		if (debouncedSearch && debouncedSearch.trim() !== "") {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="flex items-center justify-center gap-2 rounded-md border bg-white">
			<a
				href={(`/search` + "?" + createQueryString("query", searchValue)) as Route}
				className="flex h-full w-[40px] cursor-pointer items-center justify-center border-r bg-white"
			>
				<SearchIcon color="gray" size={16} />
			</a>
			<input
				className="w-42 rounded-md p-1 text-sm outline-none"
				type="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};
