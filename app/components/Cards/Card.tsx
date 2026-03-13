import Image from "next/image";
// import ButtonPopular from "../Buttons/ButtonPopular";
// import NowPlayingIcon from "@/app/assets/icons/NowPlayingIcon";
import Picture from "../../assets/images/picture-min.png";

const Card = ({ anime }: any) => {
    return (
        <div className="relative flex flex-col gap-4 w-70 h-110 text-black">
            <div className="w-62.5 h-75 overflow-hidden">
                <Image
                    fill
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col text-black">
                <h2 className="font-bold text-black">{anime.title}</h2>
                <div className="flex justify-between">
                    <p>{anime.type}</p>
                    <div>|</div>
                    <span>{anime.year}</span>
                    <div>
                        <span>{anime.score}</span>
                    </div>
                </div>
            </div>
            {/* <ButtonPopular icon={<NowPlayingIcon />} text={"Details"} /> */}
        </div>
    );
};

export default Card;
