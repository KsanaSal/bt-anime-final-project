import ListCard from "./components/Cards/ListCard";

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
        <main className="flex flex-col items-center justify-between p-4">
            <div className="@container">
                <ListCard anime={anime} />
            </div>
        </main>
    );
}
