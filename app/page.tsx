import { Suspense } from "react";
import ListCard from "./components/Cards/ListCard";
import Container from "./components/Layout/Container";
import Pagination from "./components/Pagination";

async function getAnime(query: string, page: number) {
    const base = "https://api.jikan.moe/v4/anime";

    const url =
        query.trim().length > 0
            ? `${base}?q=${encodeURIComponent(query)}&page=${page}&limit=12`
            : `${base}?page=${page}&limit=12`;

    const res = await fetch(url, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        return { data: [], pagination: { last_visible_page: 1 } };
    }

    const data = await res.json();
    return data;
}

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; page?: string }>;
}) {
    const params = await searchParams;

    const query = (params.q || "").trim();
    const page = Number(params.page) || 1;

    const data = await getAnime(query, page);

    const anime = data?.data || [];
    const lastPage = data?.pagination?.last_visible_page || 1;

    return (
        <Container>
            <ListCard anime={anime} />
            <Suspense fallback={null}>
                <Pagination lastPage={lastPage} />
            </Suspense>
        </Container>
    );
}
