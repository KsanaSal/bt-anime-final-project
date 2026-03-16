"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../Buttons/ActionButton";
import CloseIcon from "../../assets/icons/CloseIcon";

interface AnimeModalProps {
    anime: any;
    onClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

const AnimeModal: React.FC<AnimeModalProps> = ({ anime, onClose }) => {
    if (!anime) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="bg-white w-xs h-[960px] md:w-[700px] lg:w-[810px] xl:w-[1050px]  rounded-xl flex flex-col md:flex-row gap-5 md:gap-[65px] lg:gap-4 lg:flex-row overflow-hidden absolute inset-x-[50%] inset-y-[50%] translate-x-[-50%] translate-y-[-50%] px-5 lg:px-6 py-12 lg:py-14"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-[240px] h-[360px] md:w-[264px] md:h-[370px] lg:w-[375px] lg:h-[480px] xl:w-[480px] xl:h-[600px] rounded-lg overflow-hidden">
                    <Image
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        width={300}
                        height={450}
                        className="object-cover h-full w-full"
                    />
                </div>
                <button
                    className="absolute top-3 right-3 text-2xl font-bold cursor-pointer text-gray-950 hover:text-shadow-rose-700 hover:scale-[1.1] transform transition duration-200 ease-in-out"
                    onClick={onClose}
                >
                    <CloseIcon className="w-8 h-8 fill-current hover:fill-current" />
                </button>

                <div className="w-68 lg:w-2/3 flex flex-col gap-5 max-h-[90vh] overflow-y-auto md:overflow-y-hidden">
                    <h2 className="text-xl lg:text-3xl font-bold text-rose-950">
                        {anime.title}
                    </h2>

                    <div className="flex flex-col gap-2">
                        <div className="flex lg:gap-20 items-center justify-between text-base lg:text-lg">
                            <p className="text-gray-400 capitalize">
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

                        <div className="flex lg:gap-25 items-center justify-between text-base lg:text-lg">
                            <p className="text-gray-400 capitalize">
                                Popularity
                            </p>
                            <span className="text-gray-600">
                                {anime.popularity || "N/A"}
                            </span>
                        </div>

                        <div className="flex lg:gap-20 items-center justify-between text-base lg:text-lg">
                            <p className="text-gray-400 capitalize">
                                Original Title
                            </p>
                            <span className="text-gray-600">
                                {anime.title_english || anime.title}
                            </span>
                        </div>

                        <div className="flex lg:gap-33 items-center justify-between text-base lg:text-lg">
                            <p className="text-gray-400 capitalize">Genre</p>
                            <span className="text-gray-600">
                                {anime.genres
                                    ?.map((g: any) => g.name)
                                    .join(", ") || "Unknown"}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-700 text-sm">
                        <p className="font-bold uppercase text-base lg:text-lg">
                            About
                        </p>
                        <p className="text-sm lg:text-base">
                            {anime.synopsis || "No description available."}
                        </p>
                    </div>

                    <div className="flex gap-3">
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
    );
};

export default AnimeModal;
