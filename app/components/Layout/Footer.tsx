import Link from "next/link";
import Container from "./Container";
import HeartIcon from "@/app/assets/icons/HeartIcon";

const Footer = () => {
    return (
        <footer className=" max-w-screen bg-footer md:bg-footer lg:bg-footer w-full flex flex-1">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-4 py-4 md:py-6 lg:py-10 text-(--primaryLight) text-sm md:text-base lg:text-lg">
                    <p className="text-center">
                        © 2020 | All Rights Reserved | Developed with{" "}
                    </p>
                    <div className="flex items-center gap-2">
                        <HeartIcon className="w-[16px] h-[16px] text-(--accent)" />
                        <p>
                            by{" "}
                            <Link
                                href="https://github.com/KsanaSal"
                                target="_blank"
                                className="hover:text-accent hover:drop-shadow-textPrimaryLight hover:scale-150 transform transition duration-200 ease-in-out"
                            >
                                BeetRoot student Oksana Salivon
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
