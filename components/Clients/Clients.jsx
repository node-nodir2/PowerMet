"use client";
import Image from "next/image";

import Partner1 from "@/public/Images/partner1.webp";
import Partner2 from "@/public/Images/partner2.webp";
import Partner3 from "@/public/Images/partner3.webp";
import Partner4 from "@/public/Images/partner4.webp";
import Partner5 from "@/public/Images/partner5.webp";
import Partner6 from "@/public/Images/partner6.webp";
import Partner7 from "@/public/Images/partner7.webp";
import Partner8 from "@/public/Images/partner8.webp";
import Partner9 from "@/public/Images/partner9.webp";
import Partner10 from "@/public/Images/partner10.webp";
import Partner11 from "@/public/Images/partner11.webp";
import Partner12 from "@/public/Images/partner12.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const datas = [
    { id: 1, image: Partner1 },
    { id: 2, image: Partner2 },
    { id: 3, image: Partner3 },
    { id: 4, image: Partner4 },
    { id: 5, image: Partner5 },
    { id: 6, image: Partner6 },
    { id: 7, image: Partner7 },
    { id: 8, image: Partner8 },
    { id: 9, image: Partner9 },
    { id: 10, image: Partner10 },
    { id: 11, image: Partner11 },
    { id: 12, image: Partner12 },
    { id: 13, image: Partner1 },
    { id: 14, image: Partner2 },
    { id: 15, image: Partner3 },
    { id: 16, image: Partner4 },
    { id: 17, image: Partner5 },
    { id: 18, image: Partner6 },
    { id: 19, image: Partner7 },
    { id: 20, image: Partner8 },
    { id: 21, image: Partner9 },
    { id: 22, image: Partner10 },
    { id: 23, image: Partner11 },
    { id: 24, image: Partner12 },
];

const Client = ({ title }) => {
    return (
        <section>
            {title ? (
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center pb-[40px] sm:pb-[50px]">
                    {title}
                </h2>
            ) : null}
            <Swiper
                spaceBetween={50}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                navigation={true}
                pagination={false}
                modules={[Navigation, Autoplay]}
                className="mySwiper h-[62px] sm:h-[102px]"
            >
                {datas?.map((data) => (
                    <SwiperSlide
                        key={data?.id}
                        className="!flex !items-center !w-fit"
                    >
                        <Image
                            className="cursor-pointer w-auto h-[60px] sm:h-auto"
                            src={data?.image}
                            priority={true}
                            key={data?.id}
                            alt="generator"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Client;
