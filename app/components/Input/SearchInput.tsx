"use client";

import SearchIcon from "../../assets/icons/SearchIcon";
import ButtonIcon from "../Buttons/ButtonIcon";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState("");

    useEffect(() => {
        const q = searchParams.get("q") || "";
        setSearch(q);
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!search.trim()) {
            router.push("/");
            return;
        }

        router.push(`/?q=${encodeURIComponent(search)}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="rounded rounded-2 bg-[var(--primaryDarkGradient)] m-auto p-1 border border-[var(--primaryLight)] font-medium uppercase px-3 md:px-3.75 py-3.75 h-5.5 flex items-center justify-center w-full md:w-100 lg:w-150 relative"
        >
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-inherit border-none outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="absolute right-0 top-0">
                <ButtonIcon
                    type="submit"
                    border="border-none"
                    borderColor="border-inherit"
                    bgColor="bg-inherit"
                    icon={<SearchIcon className="w-6 h-6" />}
                />
            </div>
        </form>
    );
};

export default SearchInput;
