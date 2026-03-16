import Link from "next/link";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-center max-w-screen gap-2 md:gap-4 px-[16px] md:px-[32px] lg:px-[40px] py-4 md:py-6 lg:py-10 text-(--primaryLight) w-full lg:text-lg bg-footer">
            <Container>
                <div>
                    <p className="text-center">
                        © 2020 | All Rights Reserved | Developed with{" "}
                    </p>
                    {/* <FavouriteIcon className="w-[24px] h-[24px] text-accent" /> */}
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
            </Container>
        </footer>
    );
};

export default Footer;
