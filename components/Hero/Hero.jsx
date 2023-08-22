"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import toast, { Toaster } from "react-hot-toast";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Modal from "../Modal/Modal";
import { baseUrl } from "@/data";

import Hero_bg_first from "@/public/Images/hero_car.jpg";
import Hero_bg_second from "@/public/Images/hero_car1.png";
import Hero_bg_third from "@/public/Images/hero_car_third.png";
import Mark_x from "@/public/Images/x.svg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./hero.css";

const Hero = ({ language }) => {
    const [showContact, setShowContact] = useState(false);
    const [hide, setHide] = useState(false);
    const [number, setNumber] = useState("");

    const notifySuccess = () => toast.success(language?.toast?.success);
    const notifyError = () => toast.error(language?.toast?.error);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.screen.width < 650) {
                setHide(true);
            } else {
                setHide(false);
            }
        }
    }, []);

    const PostNumber = (e) => {
        e.preventDefault();
        axios
            .post(`${baseUrl}/contact`, {
                phoneNumber: number,
            })
            .then((res) => {
                if (res.status === 200) {
                    notifySuccess();
                    e.target.reset();
                }
            })
            .catch(() => {
                notifyError();
            })
            .finally(() => {
                e.target.reset();
                setTimeout(() => {
                    setShowContact(false);
                }, 3000);
            });
    };

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
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover"
                        src={Hero_bg_second}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-cover"
                        src={Hero_bg_third}
                        layout="fill"
                        alt="bg"
                    />
                </SwiperSlide>
                <Toaster />
                <div className="container absolute inset-0 top-[110px] !pt-[75.7px] sm:!pt-[200px] z-10">
                    <div className="max-w-[650px] w-full">
                        <h1 className="font-bold text-[30px] md:text-[40px] text-white uppercase">
                            {language?.hero?.title}
                        </h1>
                        <p className="font-normal text-[18px] md:text-[24px] text-white opacity-80 mt-[10px] md:mt-[16px]">
                            {language?.hero?.text}
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowContact(true)}
                            className="flex items-center w-fit text-white text-[18px] bg-[#da291c] rounded-[8px] px-[30px] py-[15px] mt-[32px]"
                        >
                            {language?.header?.consultation}
                        </button>
                    </div>
                </div>
            </Swiper>

            <Modal
                change={false}
                isVisible={showContact}
                onClose={() => {
                    setShowContact(false);
                }}
            >
                <div className="max-w-[590px] w-full py-[30px] px-[60px] relative bg-[#da291c] rounded-[26px]">
                    <button
                        type="button"
                        onClick={() => setShowContact(false)}
                        className="absolute top-[20px] right-[25px] w-[30px] h-[30px]"
                    >
                        <Image
                            src={Mark_x}
                            width={30}
                            height={30}
                            alt="close"
                        />
                    </button>
                    <h3 className="font-normal text-[30px] text-white text-center leading-9">
                        {language?.header?.modal?.title}
                    </h3>
                    <form
                        autoComplete="off"
                        onSubmit={PostNumber}
                        className="space-y-[23px] mt-[40px]"
                    >
                        <input
                            type="text"
                            placeholder={language?.header?.modal?.placeholder}
                            onChange={(e) => setNumber(e.target.value.trim())}
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white bg-input-bg-contact rounded-lg outline-none text-[16px] text-white placeholder-white px-[25px]"
                        />
                        <button
                            className="w-full h-[45px] sm:h-[54px] font-bold text-[18px] text-[#da291c] text-center bg-[#fff] rounded-lg"
                            type="submit"
                        >
                            {language?.header?.modal?.send}
                        </button>
                    </form>
                    <div className="my-5">
                        <p className="font-normal text-[26px] text-white text-center">
                            {language?.header?.modal?.call}
                        </p>
                        <Link
                            href="tel:+998980013666"
                            className="block font-normal text-[30px] text-white text-center leading-8"
                        >
                            {" "}
                            +998 98 001 3 666
                        </Link>
                    </div>
                    <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                        {language?.header?.modal?.text}
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default Hero;
