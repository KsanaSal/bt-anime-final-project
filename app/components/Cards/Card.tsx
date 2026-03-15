import Image from "next/image";
// import ButtonPopular from "../Buttons/ButtonPopular";
// import NowPlayingIcon from "@/app/assets/icons/NowPlayingIcon";
// import Picture from "../../assets/images/picture-min.png";

const Card = ({ anime, onClick }: any) => {
    if (!anime) return null;

    const image =
        anime?.images?.jpg?.image_url ||
        "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png";
    const genres =
        anime?.genres?.map((g: any) => g.name).join(", ") || "Unknown";
    const title = anime?.title || "No title";
    const year = anime?.year || "?";

    return (
        <div
            className="relative flex flex-col gap-4 w-70 h-110 md:w-80 md:h-120 lg:w-96 lg:h-155 text-black transition duration-300 hover:scale-105 hover:shadow-2xl bg-rose-50 rounded-lg "
            onClick={onClick}
        >
            <div className="w-70 md:w-80 lg:w-96 h-100 md:h-112.5 lg:h-145 overflow-hidden rounded-lg">
                <Image
                    width={280}
                    height={300}
                    src={image}
                    alt={title}
                    className="object-cover w-full h-100% md:h-112.5 lg:h-145"
                />
            </div>

            <div className="flex flex-col text-black text-[14px] md:text-[16px] lg:text-[18px] pb-2 pl-1">
                <h2 className="font-bold text-rose-950 text-[16px] md:text-[18px] lg:text-[20px]">
                    {title}
                </h2>
                <div className="flex gap-1 text-orange-600">
                    <p>{genres}</p>
                    <div>|</div>
                    <span>{year}</span>
                    {/* <span>⭐ {anime.score}</span> */}
                </div>
            </div>
            {/* <ButtonPopular icon={<NowPlayingIcon />} text={"Details"} /> */}
        </div>
    );
};

export default Card;
