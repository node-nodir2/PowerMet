"use client";
import Image from "next/image";

// Images
import Sertificare_1 from "@/public/Images/certificate_1.jpg";
import Sertificare_2 from "@/public/Images/certificate_2.jpg";
import Sertificare_3 from "@/public/Images/certificate_3.jpg";
import Sertificare_4 from "@/public/Images/certificate_4.jpg";
import Sertificare_5 from "@/public/Images/certificate_5.jpg";
import Sertificare_6 from "@/public/Images/certificate_6.jpg";
import Sertificare_7 from "@/public/Images/certificate_7.jpg";
import Sertificare_8 from "@/public/Images/certificate_8.jpg";
import Sertificare_9 from "@/public/Images/certificate_9.jpg";
import Sertificare_10 from "@/public/Images/certificate_10.jpg";
import Sertificare_11 from "@/public/Images/certificate_11.jpg";
import Sertificare_12 from "@/public/Images/certificate_12.jpg";
import Sertificare_13 from "@/public/Images/certificate_13.jpg";
import Sertificare_14 from "@/public/Images/certificate_14.jpg";
import Sertificare_15 from "@/public/Images/certificate_15.jpg";
import Sertificare_16 from "@/public/Images/certificate_16.jpg";
import Sertificare_17 from "@/public/Images/certificate_17.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./documentation.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const datas = [
    {
        id: 1,
        image: Sertificare_1,
    },
    {
        id: 2,
        image: Sertificare_2,
    },
    {
        id: 3,
        image: Sertificare_3,
    },
    {
        id: 4,
        image: Sertificare_4,
    },
    {
        id: 5,
        image: Sertificare_5,
    },
    {
        id: 6,
        image: Sertificare_6,
    },
    {
        id: 7,
        image: Sertificare_7,
    },
    {
        id: 8,
        image: Sertificare_8,
    },
    {
        id: 9,
        image: Sertificare_9,
    },
    {
        id: 10,
        image: Sertificare_10,
    },
    {
        id: 11,
        image: Sertificare_11,
    },
    {
        id: 12,
        image: Sertificare_12,
    },
    {
        id: 13,
        image: Sertificare_13,
    },
    {
        id: 14,
        image: Sertificare_14,
    },
    {
        id: 15,
        image: Sertificare_15,
    },
    {
        id: 16,
        image: Sertificare_16,
    },
    {
        id: 17,
        image: Sertificare_17,
    },
];

const Documentation = ({ language }) => {
    return (
        <section className="bg-white">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] !pb-[20px] sm:!pb-[70px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center py-[30px] sm:py-[57px]">
                    {language?.hero_about?.documentation}
                </h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{
                        delay: 12000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full z-10 !pb-3 !px-10"
                >
                    {datas.map((data) => (
                        <SwiperSlide
                            key={data?.id}
                            className="cursor-pointer !flex !justify-center"
                        >
                            <div className="max-w-[250px] bg-white rounded-md">
                                <Image
                                    className="w-full h-[250px] rounded-md"
                                    src={data?.image}
                                    alt="Sertificait"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Documentation;
