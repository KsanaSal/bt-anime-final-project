"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../Buttons/ActionButton";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

const AnimeModal = ({ anime, onClose }: any) => {
    if (!anime) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
            >
                <motion.div
                    className="bg-white max-w-4xl w-full rounded-xl flex overflow-hidden relative px-6 py-10"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Постер */}
                    <div className="w-94 rounded-lg overflow-hidden">
                        <Image
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            width={300}
                            height={450}
                            className="object-cover h-full w-full"
                        />
                    </div>

                    {/* Інформація */}
                    <div className="w-2/3 p-6 flex flex-col gap-3">
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-2xl font-bold"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-rose-950">
                            {anime.title}
                        </h2>

                        <div className="flex gap-20 items-center">
                            <p className="text-gray-400 text-lg capitalize">
                                vote / votes{" "}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="bg-orange-500 text-white px-2 py-0.5 rounded">
                                    {anime.score || "N/A"}
                                </span>
                                <span className="text-gray-600">
                                    / {anime.members || "?"}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-25 items-center">
                            <p className="text-gray-400 text-lg capitalize">
                                Popularity
                            </p>
                            <span className="text-gray-600">
                                {anime.popularity || "N/A"}
                            </span>
                        </div>

                        <div className="flex gap-20 items-center">
                            <p className="text-gray-400 text-lg capitalize">
                                Original Title
                            </p>
                            <span className="text-gray-600">
                                {anime.title_english || anime.title}
                            </span>
                        </div>

                        <div className="flex gap-33 items-center">
                            <p className="text-gray-400 text-lg capitalize">
                                Genre
                            </p>
                            <span className="text-gray-600">
                                {anime.genres
                                    ?.map((g: any) => g.name)
                                    .join(", ") || "Unknown"}
                            </span>
                        </div>

                        <div className="mt-2 text-gray-700 text-sm">
                            <p className="font-bold uppercase text-lg">About</p>
                            <p className="text-base">
                                {anime.synopsis || "No description available."}
                            </p>
                        </div>

                        <div className="mt-auto flex gap-3">
                            <ActionButton
                                variant="primary"
                                onClick={() => console.log("Added to watched")}
                            >
                                ADD TO WATCHED
                            </ActionButton>
                            <ActionButton
                                variant="secondary"
                                onClick={() => console.log("Added to queue")}
                            >
                                ADD TO QUEUE
                            </ActionButton>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimeModal;
