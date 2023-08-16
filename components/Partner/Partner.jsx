import Link from "next/link";
import Image from "next/image";
import Client from "../Clients/Clients";

// Images
import PartnerImg from "@/public/Images/partner.png";
import PartnerImgMobile from "@/public/Images/news.png";

let datas = [
    {
        id: 1,
        title: "С КЕМ МЫ РАБОТАЕМ?",
        description:
            "Наша фирма гордится партнерством с лучшими производителями индустриальных генераторов. В качестве ведущего импортера, наша компания представляет их продукцию на рынке. Мы стремимся предлагать клиентам только лучшие генераторы, обеспечивая надежное и эффективное энергоснабжение в различных отраслях и сферах деятельности.",
    },
];

const Arrow = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
    >
        <g clipPath="url(#clip0_449_434)">
            <path
                d="M15.06 5.78301L20.717 11.44C20.9979 11.7213 21.1557 12.1025 21.1557 12.5C21.1557 12.8975 20.9979 13.2788 20.717 13.56L15.061 19.218C14.7796 19.4994 14.398 19.6575 14 19.6575C13.602 19.6575 13.2204 19.4994 12.939 19.218C12.6576 18.9366 12.4995 18.555 12.4995 18.157C12.4995 17.7591 12.6576 17.3774 12.939 17.096L16.035 14H4.5C4.10218 14 3.72064 13.842 3.43934 13.5607C3.15804 13.2794 3 12.8978 3 12.5C3 12.1022 3.15804 11.7207 3.43934 11.4394C3.72064 11.158 4.10218 11 4.5 11H16.035L12.94 7.90401C12.6587 7.62262 12.5008 7.24102 12.5009 6.84316C12.501 6.4453 12.6591 6.06377 12.9405 5.78251C13.2219 5.50125 13.6035 5.34329 14.0014 5.34338C14.3992 5.34348 14.7807 5.50162 15.062 5.78301H15.06Z"
                fill="#da291c"
            />
        </g>
        <defs>
            <clipPath id="clip0_449_434">
                <rect
                    width="24"
                    height="21"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

const Partner = () => {
    return (
        <section className="container !py-[30px] sm:!py-[42px] space-y-5 sm:space-y-[30px]">
            <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center">
                Наши партнеры
            </h2>
            {datas?.map((data) => (
                <div
                    key={data?.id}
                    className="lg:flex lg:items-center lg:justify-between pb-5 lg:pb-10 mt-8"
                >
                    <div className="lg:max-w-[430px] w-full mx-auto">
                        <h2 className="font-bold text-[24px] lg:text-[30px] text-[#333] leading-8">
                            {data?.title}
                        </h2>
                        <p className="font-medium text-[18px] text-text-color leading-normal mt-5">
                            {data?.description}
                        </p>
                        <Image
                            className="block lg:hidden max-w-[430px] w-full h-[248px] mx-auto rounded-b-[26px] mt-5 object-cover"
                            src={PartnerImgMobile}
                            alt="service-image"
                        />
                        <div className="flex items-center space-x-[6px] mt-5">
                            <Link
                                className="font-medium text-[20px] text-[#da291c]"
                                href={"/catalog"}
                            >
                                Посмотреть каталог
                            </Link>
                            {Arrow}
                        </div>
                        <div className="block lg:hidden mt-[30px]">
                            <Client title={false} />
                        </div>
                    </div>
                    <Image
                        className="hidden lg:block w-full h-[352px] ml-16 rounded-[26px] object-cover"
                        src={PartnerImg}
                        alt="service-image"
                    />
                </div>
            ))}
        </section>
    );
};

export default Partner;
