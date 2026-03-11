import Image from "next/image";
// import ButtonPopular from "../Buttons/ButtonPopular";
// import NowPlayingIcon from "@/app/assets/icons/NowPlayingIcon";
import Picture from "../../assets/images/picture-min.png";

const Card = () => {
    return (
        <div className="relative flex flex-col gap-4 w-70 h-110 text-black">
            <div className="w-62.5 h-75">
                <Image fill src={Picture} alt="card" className="object-cover" />
            </div>

            <div className="flex flex-col text-black">
                <h2 className="font-bold text-black">Card</h2>
                <div className="flex justify-between">
                    <p>Card</p>
                    <div>|</div>
                    <span>2002</span>
                    <div>
                        <span>123</span>
                    </div>
                </div>
            </div>
            {/* <ButtonPopular icon={<NowPlayingIcon />} text={"Details"} /> */}
        </div>
    );
};

export default Card;
