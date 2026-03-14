import ListCard from "./components/Cards/ListCard";
import Container from "./components/Layout/Container";
import Pagination from "./components/Pagination";

async function getAnime(query: string, page: number) {
    const url = query
        ? `https://api.jikan.moe/v4/anime?q=${query}&limit=12`
        : "https://api.jikan.moe/v4/anime?limit=12";

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
