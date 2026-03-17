"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import AnimeModal from "../Modal/AnimeModal";
import { AnimatePresence } from "framer-motion";

const ListCard = ({ anime }: { anime: any[] }) => {
    const [selectedAnime, setSelectedAnime] = useState<any>(null);

    useEffect(() => {
        if (selectedAnime) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedAnime]);

    if (!anime || anime.length === 0) {
        return <p className="py-8 text-center">No anime found</p>;
    }

    return (
        <>
            <ul className="relative grid justify-center items-center grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6 py-10 md:py-15">
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
