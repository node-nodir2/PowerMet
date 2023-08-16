import Image from "next/image";
import Link from "next/link";

// Image
import FactotyImage from "@/public/Images/news2.png";

const Factory = ({ language }) => {
    return (
        <section className="bg-white">
            <div className="container flex flex-col lg:flex-row items-center justify-between space-x-0 sm:space-x-10 !pt-5 sm:!pt-[68px]">
                <Image
                    data-aos="fade-up-right"
                    data-aos-duration="600"
                    className="max-w-[530px] w-full !h-[275px] sm:!h-[410px] rounded-b-[50px] object-cover"
                    src={FactotyImage}
                    width={530}
                    height={410}
                    alt="factory"
                />
                <div
                    data-aos="fade-up-left"
                    data-aos-duration="600"
                    className="max-w-[540px] w-full"
                >
                    <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] sm:text-center mt-2">
                        {language?.factory?.title}
                    </h2>
                    <p className="font-normal text-[18px] text-[#333] opacity-80 my-2">
                        {language?.factory?.text}
                    </p>
                    <div className="flex items-center justify-between w-full mt-[16px] sm:mt-[60px]">
                        <p className="hidden sm:block"></p>
                        <Link
                            href={`/about`}
                            className="flex justify-between w-fit font-semibold sm:font-bold text-[16px] sm:text-[18px] text-white px-[30px] sm:px-[45px] py-[12px] sm:py-[15px] bg-[#da291c] rounded-lg"
                        >
                            {language?.factory?.link}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Factory;
