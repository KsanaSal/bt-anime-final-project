"use client";

import { useState } from "react";
import Card from "./Card";
import AnimeModal from "../Modal/AnimeModal";
import { AnimatePresence } from "framer-motion";

const ListCard = ({ anime }: { anime: any[] }) => {
    const [selectedAnime, setSelectedAnime] = useState<any>(null);

    if (!anime || anime.length === 0) {
        return <p className="py-8 text-center">No anime found</p>;
    }

    return (
        <>
            <ul className="grid justify-center items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {anime.map((item: any) => (
                    <li key={item.mal_id}>
                        <Card
                            anime={item}
                            onClick={() => setSelectedAnime(item)}
                        />
                    </li>
                ))}
            </ul>
            <AnimatePresence>
                {selectedAnime && (
                    <AnimeModal
                        anime={selectedAnime}
                        onClose={() => setSelectedAnime(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ListCard;
