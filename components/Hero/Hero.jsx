"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Hero_bg_first from "@/public/Images/hero_car.jpg";
import Hero_bg_second from "@/public/Images/hero_car1.png";
import Hero_bg_third from "@/public/Images/hero_car_third.png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./hero.css";

const Hero = ({ language, lang }) => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.screen.width < 650) {
                setHide(true);
            } else {
                setHide(false);
            }
        }
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                autoplay={{
                    delay: 5000,
                }}
                navigation={hide ? false : true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className={`mySwiper w-full h-[800px] md:h-[950px] duration-300`}
            >
                <SwiperSlide>
                    <Image
                        className="object-cover"
                        src={Hero_bg_first}
                        priority={true}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover"
                        src={Hero_bg_second}
                        priority={true}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover"
                        src={Hero_bg_third}
                        priority={true}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <div className="container absolute inset-0 top-[110px] !pt-[75.7px] sm:!pt-[200px] z-10">
                    <div className="max-w-[650px] w-full">
                        <h1 className="font-bold text-[30px] md:text-[40px] text-white uppercase">
                            {language?.hero?.title}
                        </h1>
                        <p className="font-normal text-[18px] md:text-[24px] text-white opacity-80 mt-[10px] md:mt-[16px]">
                            {language?.hero?.text}
                        </p>
                        <Link
                            href={`/${lang}/catalog`}
                            className="flex items-center w-fit text-white text-[18px] bg-[#da291c] rounded-[8px] px-[50px] py-[15px] mt-[32px]"
                        >
                            {language?.hero?.link}
                        </Link>
                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default Hero;
