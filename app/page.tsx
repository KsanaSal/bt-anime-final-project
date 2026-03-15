import ListCard from "./components/Cards/ListCard";
import Container from "./components/Layout/Container";
import Pagination from "./components/Pagination";

async function getAnime(query: string, page: number) {
    const base = "https://api.jikan.moe/v4/anime";
    const url =
        query.trim().length > 0
            ? `${base}?q=${encodeURIComponent(query)}&page=${page}&limit=12`
            : `${base}?page=${page}&limit=12`;

    let res = await fetch(url, {
        next: { revalidate: 3600 },
    });

    const data = await res.json();
    return data;
}

export default async function Home({
    searchParams,
}: {
    searchParams: { q?: string; page?: string };
}) {
    const query = searchParams.q || "";
    const page = Number(searchParams.page) || 1;

    const data = await getAnime(query, page);
    const lastPage = data.pagination?.last_visible_page || 1;

    return (
        <Container>
            <ListCard anime={data.data} />
            <Pagination lastPage={lastPage} />
        </Container>
    );
}
