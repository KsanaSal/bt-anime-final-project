import Link from "next/link";
import { Suspense } from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import SearchInput from "../Input/SearchInput";
import LibraryIcon from "../../assets/icons/LibraryIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import Container from "./Container";
// import ListPopular from "./ListPopular";
// import ButtonIcon from "./Buttons/ButtonIcon";
// import UserIcon from "../../assets/icons/UserIcon";

const Header = () => {
    return (
        <header
            className=" fixed top-0 z-50 flex flex-col items-center w-full h-[250px]  
        bg-header md:bg-header lg:bg-header py-6 md:py-8 lg:py-10 text-primaryLight"
        >
            <Container>
                <div className="flex flex-col items-center w-full gap-5 md:gap-7.5">
                    <div className="flex justify-between items-center gap-2 w-full">
                        <Link
                            href={"/"}
                            className="flex gap-2 items-center text-(--primaryLight) h-max group hover:text-(--accent) hover:scale-110 transform transition duration-200 ease-in-out"
                        >
                            <div className="flex items-center justify-center w-11.25 h-10 p-1 group-hover:fill-(--accent) group-hover:drop-shadow-(--boxPrimaryLight)">
                                <LogoIcon className="w-11.25 h-10" />
                            </div>

                            <h1 className="hidden md:flex md:text-[24px] lg:text-[30px] font-medium group-hover:text-(--accent) group-hover:drop-shadow-(--textPrimaryLight)">
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
                                Library
                            </Link>
                            {/* <ButtonIcon
                        border="border"
                        borderColor="border-transparent-primaryLight7"
                        bgColor="bg-primaryDarkGradient"
                        icon={<UserIcon className="w-[24px] h-[24px]" />}
                    /> */}
                        </div>
                    </div>
                    <Suspense fallback={null}>
                        <SearchInput />
                    </Suspense>
                    {/* <ListPopular /> */}
                </div>
            </Container>
        </header>
    );
};

export default Header;
