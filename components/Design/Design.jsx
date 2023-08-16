"use client";
import Image from "next/image";

// Images
import Generator from "@/public/Images/big_generator.png";
import Generator2 from "@/public/Images/big_generator2.png";
// import Plus from "@/public/Images/plus.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./design.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Design = ({ language }) => {
    return (
        <div className="bg-white mt-5">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] !pb-[30px] sm:!pb-[70px]">
                <div className="max-w-[980px] w-full mx-auto">
                    <h2 className="font-bold text-[40px] leading-10 sm:leading-[40px] sm:text-[48px] text-[#333] text-center">
                        {language?.design?.title}
                    </h2>
                    <p className="font-normal text-[16px] sm:text-[18px] text-[#333] text-center opacity-80 mt-[15px]">
                        {language?.design?.text}
                    </p>
                </div>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    autoplay={{
                        delay: 55000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={false}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper h-[170px] sm:h-[490px] !z-0 !pb-3 !pl-6 !pr-4 !px-0 sm:!px-20 mt-5"
                >
                    <SwiperSlide className="!flex !justify-center cursor-pointer">
                        <Image
                            className="w-auto h-full rounded-md"
                            src={Generator}
                            alt="generator"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="!flex !justify-center cursor-pointer">
                        <Image
                            className="w-auto h-full rounded-md"
                            src={Generator2}
                            alt="generator"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Design;
