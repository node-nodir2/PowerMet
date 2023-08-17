import Link from "next/link";

import "./hero.css";

const Hero = ({ title, text, link, route, bgImage, language }) => {
    return (
        <section
            className={`${
                bgImage == "about"
                    ? "hero-first"
                    : bgImage == "catalog"
                    ? "hero-second"
                    : bgImage == "service"
                    ? "hero-third"
                    : bgImage == "partner"
                    ? "hero-fourth"
                    : bgImage == "contact"
                    ? "hero-fifth"
                    : null
            } bg-no-repeat bg-cover pt-[75.7px] sm:pt-[156px] !pb-[260px] sm:!pb-[130px]`}
        >
            <div className="container ">
                <div className="hidden sm:flex items-center pt-[6px]">
                    <Link
                        className="font-normal text-[20px] text-link-color"
                        href={"/"}
                    >
                        {language?.hero_catalog?.home} /{" "}
                    </Link>{" "}
                    <span className="inline-block font-normal text-[20px] text-white ml-[3px]">
                        {route}
                    </span>
                </div>
                <div
                    className={`${
                        bgImage === "partner"
                            ? "sm:pt-[147px] !pb-[120px] sm:!pb-[120px]"
                            : bgImage === "about"
                            ? "sm:pt-[100px] !pb-[30px] sm:!pb-[100px]"
                            : bgImage === "service"
                            ? "sm:pt-[100px] !pb-[30px] sm:!pb-[100px]"
                            : bgImage === "contact"
                            ? "sm:pt-[100px] !pb-[30px] sm:!pb-[160px]"
                            : "sm:pt-[67px]"
                    } pt-[170px] sm:max-w-[630px] w-full`}
                >
                    <h1
                        className={`font-bold ${
                            bgImage == "partner" || "contact"
                                ? "text-[30px] md:text-[40px]"
                                : "text-[30px] md:text-[50px]"
                        } ${
                            bgImage == "about"
                                ? "!text-[46px] sm:!text-[60px]"
                                : null
                        } leading-60 text-white uppercase`}
                    >
                        {title}
                    </h1>
                    <p className="text-[18px] md:text-[24px] text-white opacity-80 mt-[10px] md:mt-[16px]">
                        {text}
                    </p>
                    {link ? (
                        <Link
                            href={`tel:+998980013666`}
                            className="flex items-center w-fit font-semibold text-white text-[18px] bg-[#da291c] rounded-[8px] px-[30px] py-[15px] mt-[32px]"
                        >
                            {language?.header?.consultation}
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Hero;
