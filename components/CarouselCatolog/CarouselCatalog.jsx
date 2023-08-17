"use client";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

import Modal from "../Modal/Modal";
import Mark_x from "@/public/Images/x_black.svg";
import { baseUrl, motionConfig } from "@/data";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./catolog.css";

const CarouselCatalog = ({ language }) => {
    const [products, setProducts] = useState([]);
    const [itemProperties, setItemProperties] = useState({});
    const [showModal, setShowModal] = useState(false);

    const getProducts = () => {
        axios
            .get(`${baseUrl}/product/all`, {
                headers: { lang: "uz" },
            })
            .then((res) => setProducts(res?.data?.data?.result.result))
            .catch(console.log);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="bg-white mt-5 sm:mt-[68px]">
            <div className="max-w-[1350px] w-full mx-auto px-[16px] sm:!pb-[100px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center py-[30px] sm:py-[57px]">
                    {language?.catalog?.title}
                </h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation={true}
                    pagination={false}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
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
                    className="mySwiper w-full z-10 !pb-3 !px-[50px]"
                >
                    <AnimatePresence>
                        {Array.isArray(products) &&
                            products?.map((product) => (
                                <SwiperSlide
                                    key={product?._id}
                                    className="cursor-pointer !flex !justify-center"
                                >
                                    <motion.div
                                        {...motionConfig}
                                        className="max-w-[250px] bg-white rounded-md shadow-card_shadow pt-4"
                                    >
                                        <Image
                                            className="w-full h-[165px] rounded-md"
                                            src={`${baseUrl}/public/uploads/${product?.image}`}
                                            alt="generator"
                                            width={236}
                                            height={165}
                                        />
                                        <div
                                            className="px-[18px] pb-5"
                                            data-image={product?.image}
                                        >
                                            <h2 className="font-medium text-[20px] text-black">
                                                {product?.model}
                                            </h2>
                                            <p className="font-bold text-[#333] opacity-80 mt-[3px]">
                                                Тип топлива{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    - {product?.typeOfRegular}
                                                </span>
                                            </p>
                                            <p className="font-bold text-[#333] opacity-80">
                                                Модель{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    - {product?.model}
                                                </span>
                                            </p>
                                            <p className="font-bold text-[#333] opacity-80">
                                                Мощность{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    - {product?.maxPover} kVa
                                                </span>
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setItemProperties(product);
                                                }}
                                                className="w-full mx-auto font-medium text-[18px] text-white text-center py-2 bg-[#da291c] rounded-lg mt-[14px]"
                                            >
                                                Подробно
                                            </button>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                    </AnimatePresence>
                </Swiper>
            </div>

            <Modal
                change={false}
                isVisible={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
            >
                <div className="flex flex-col sm:flex-row items-center justify-between bg-white max-w-[720px] w-full py-[30px] px-[10px] sm:px-[30px] rounded-[26px] border relative">
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="absolute top-[20px] right-[25px] w-[30px] h-[30px]"
                    >
                        <Image
                            src={Mark_x}
                            width={30}
                            height={30}
                            alt="close"
                        />
                    </button>
                    <Image
                        className="!max-w-[300px] !w-full h-[195px] sm:!mr-10 mt-10 sm:mt-0"
                        src={`${baseUrl}/public/uploads/${itemProperties?.image}`}
                        width={306}
                        height={195}
                        alt="product-image"
                    />
                    <div className="flex flex-col items-center justify-center text-center sm:text-start">
                        <h2 className="font-bold text-[20px] leading-[30px] text-text-color mt-5 sm:mt-0">
                            Название + кВа
                        </h2>
                        <ul className="mt-[30px]">
                            <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                Модель - кВа
                            </li>
                            <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                Макс.общая выходная мощность (кВт/л.с.)
                            </li>
                            <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                Объем цилиндра (л){" "}
                            </li>
                            <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                Построение цилиндров Диаметр цилиндра x Ход
                                поршня (мм*мм)
                            </li>
                            <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                                Тип регулятора
                            </li>
                        </ul>
                        <Link
                            target="_blank"
                            download="Nodirbek's resume.pdf"
                            href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
                            className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                        >
                            Скачать
                        </Link>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CarouselCatalog;
