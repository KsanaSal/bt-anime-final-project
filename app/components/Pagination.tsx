"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Pagination = ({ lastPage }: { lastPage: number }) => {
    const router = useRouter();
    const params = useSearchParams();

    const currentPage = Number(params.get("page")) || 1;
    const query = params.get("q") || "";

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getPage = () => {
        const pages = [];
        const max = isMobile ? 3 : 5;

        let start = Math.max(1, currentPage - 2);
        let end = Math.min(lastPage, start + max - 1);

        if (end - start < max - 1) {
            start = Math.max(1, end - max + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        // console.log(pages);

        return pages;
    };

    const pages = getPage();
    // console.log(pages);

    const handleClick = (page: number) => {
        const href = query ? `/?q=${query}&page=${page}` : `/?page=${page}`;
        router.push(href);
        // router.refresh();
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-10 text-white">
            <button
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1)}
                className={`px-3 py-1 border-none bg-rose-950 rounded ${
                    currentPage === 1 ? "opacity-40 pointer-events-none" : ""
                }`}
            >
                Prev
            </button>

            {pages[0] > 1 && (
                <>
                    <button
                        onClick={() => handleClick(1)}
                        className="px-3 py-1 border-none text-rose-950 rounded"
                    >
                        1
                    </button>
                    {pages[0] > 2 && <span>...</span>}
                </>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    className={`px-3 py-1 border-none text-rose-950 rounded ${
                        page === currentPage ? "bg-orange-500 text-white" : ""
                    }`}
                >
                    {page}
                </button>
            ))}

            {pages[pages.length - 1] < lastPage && (
                <>
                    {pages[pages.length - 1] < lastPage - 1 && <span>...</span>}
                    <button
                        onClick={() => handleClick(lastPage)}
                        className="px-3 py-1 border-none text-rose-950 rounded"
                    >
                        {lastPage}
                    </button>
                </>
            )}

            <button
                disabled={currentPage === lastPage}
                onClick={() => handleClick(currentPage + 1)}
                className={`px-3 py-1 border-none bg-rose-950 rounded ${
                    currentPage === lastPage
                        ? "opacity-40 pointer-events-none"
                        : ""
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
