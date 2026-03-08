import Link from "next/link";
import LogoIcon from "../assets/icons/LogoIcon";
// import SearchInput from "./assets/icons/SearchInput";
import LibraryIcon from "../assets/icons/LibraryIcon";
import HomeIcon from "../assets/icons/HomeIcon";
// import ListPopular from "./ListPopular";
// import ButtonIcon from "./Buttons/ButtonIcon";
import UserIcon from "../assets/icons/UserIcon";

const Header = () => {
    return (
        <header
            className="flex flex-col items-center max-w-screen h-90 gap-5 md:gap-7.5
        bg-header md:bg-header lg:bg-header bg-no-repeat bg-cover bg-center px-4 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 text-primaryLight"
        >
            <div className="flex justify-between gap-2 w-full">
                <Link
                    href={"/"}
                    className="flex gap-2 items-center text-primaryLight h-max group hover:text-accent hover:scale-110 transform transition duration-200 ease-in-out"
                >
                    <div className="flex items-center justify-center w-11.25 h-[40px] rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 group-hover:fill-accent group-hover:shadow-boxPrimaryLight">
                        <LogoIcon className="w-[45px] h-[40px]" />
                    </div>

                    <h1 className="hidden md:flex text-[24px] lg:text-[30px] font-medium group-hover:text-accent group-hover:drop-shadow-textPrimaryLight">
                        Filmoteka
                    </h1>
                </Link>
                <div className="flex justify-end md:justify-between gap-2 md:gap-[30px] h-max items-center text-[12px] md:text-[14px] lg:text-[18px] tracking-[2px]">
                    <Link
                        href={"/"}
                        className="rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 font-medium uppercase px-[8px] md:px-[10px] lg:px-[12px] py-[4px] md:py-[8px] lg:py-[10px] h-[30px] flex items-center justify-center gap-2 hover:text-accent hover:scale-110 hover:shadow-boxPrimaryLight transform transition duration-200 ease-in-out"
                    >
                        <HomeIcon className="w-[24px] h-[24px]" />
                        Home
                    </Link>
                    <Link
                        href={"/library"}
                        className="rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 font-medium uppercase px-[8px] py-[4px] h-[30px] flex items-center justify-center gap-2 hover:text-accent hover:scale-110 hover:shadow-boxPrimaryLight transform transition duration-200 ease-in-out"
                    >
                        <LibraryIcon className="w-[24px] h-[24px]" />
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
            {/* <SearchInput /> */}
            {/* <ListPopular /> */}
        </header>
    );
};

export default Header;
