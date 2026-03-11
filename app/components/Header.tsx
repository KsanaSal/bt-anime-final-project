import Link from "next/link";
import LogoIcon from "../assets/icons/LogoIcon";
import SearchInput from "./Input/SearchInput";
import LibraryIcon from "../assets/icons/LibraryIcon";
import HomeIcon from "../assets/icons/HomeIcon";
// import ListPopular from "./ListPopular";
// import ButtonIcon from "./Buttons/ButtonIcon";
import UserIcon from "../assets/icons/UserIcon";

const Header = () => {
    return (
        <header
            className="flex flex-col items-center max-w-screen h-75 gap-5 md:gap-7.5
        bg-header md:bg-header lg:bg-header px-4 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 text-primaryLight"
        >
            <div className="flex justify-between items-center gap-2 w-full">
                <Link
                    href={"/"}
                    className="flex gap-2 items-center text-(--primaryLight) h-max group hover:text-(--accent) hover:scale-110 transform transition duration-200 ease-in-out"
                >
                    <div className="flex items-center justify-center w-11.25 h-10 rounded rounded-2 bg-(--primaryDarkGradient) p-1 border border-(--primaryLight) group-hover:fill-(--accent) hover:shadow-(--boxPrimaryLight)">
                        <LogoIcon className="w-11.25 h-10" />
                    </div>

                    <h1 className="hidden md:flex text-6 lg:text-7.5 font-medium group-hover:text-(--accent) group-hover:drop-shadow-(--textPrimaryLight)">
                        Anime / Manga
                    </h1>
                </Link>
                <div className="flex justify-end md:justify-between gap-2 md:gap-7.5 h-max items-center text-[12px] md:text-[14px] lg:text-[18px] tracking-[2px]">
                    <Link
                        href={"/"}
                        className="rounded rounded-2 bg-(--primaryDarkGradient) p-1 border border-(--primaryLight) font-medium uppercase px-2 md:px-2.5 lg:px-3 py-1 md:py-2 lg:py-2.5 h-7.5 flex items-center justify-center gap-2 hover:text-(--accent) hover:scale-110 hover:shadow-(--boxPrimaryLight) transform transition duration-200 ease-in-out"
                    >
                        <HomeIcon className="w-6 h-6" />
                        Home
                    </Link>
                    <Link
                        href={"/library"}
                        className="rounded rounded-2 bg-(--primaryDarkGradient) p-1 border border-(--primaryLight) font-medium uppercase px-2 py-1 h-7.5 flex items-center justify-center gap-2 hover:text-(--accent) hover:scale-110 hover:shadow-(--boxPrimaryLight) transform transition duration-200 ease-in-out"
                    >
                        <LibraryIcon className="w-6 h-6" />
                        My library
                    </Link>
                    {/* <ButtonIcon
                        border="border"
                        borderColor="border-transparent-primaryLight7"
                        bgColor="bg-primaryDarkGradient"
                        icon={<UserIcon className="w-[24px] h-[24px]" />}
                    /> */}
                </div>
            </div>
            <SearchInput />
            {/* <ListPopular /> */}
        </header>
    );
};

export default Header;
