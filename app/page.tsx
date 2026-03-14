import ListCard from "./components/Cards/ListCard";
import Container from "./components/Layout/Container";

async function getAnime() {
    const res = await fetch("https://api.jikan.moe/v4/anime", {
        next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.data;
}

export default async function Home() {
    const anime = await getAnime();
    return (
        <Container>
            <ListCard anime={anime} />
        </Container>
    );
}
