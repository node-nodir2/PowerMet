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

const CarouselCatalog = ({ language, lang }) => {
    const [products, setProducts] = useState([]);
    const [itemProperties, setItemProperties] = useState({});
    const [showModal, setShowModal] = useState(false);

    const getProducts = () => {
        axios
            .get(`${baseUrl}/product/all`, {
                headers: { lang: lang },
            })
            .then((res) =>
                setProducts([
                    ...res?.data?.data?.result.result,
                    ...res?.data?.data?.result2.result,
                ])
            )
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
                        delay: 5000,
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
                                        className="max-w-[270px] bg-white rounded-md shadow-card_shadow pt-4"
                                    >
                                        <Image
                                            className="w-full h-[165px] rounded-md"
                                            src={`${baseUrl}/public/uploads/${product?.image}`}
                                            priority={true}
                                            alt="generator"
                                            width={236}
                                            height={165}
                                        />
                                        <div
                                            className="px-[18px] pb-5"
                                            data-image={product?.image}
                                        >
                                            <h2 className="font-medium text-[20px] text-black">
                                                {product?.category?.name ===
                                                    "GASOLINE" ||
                                                product?.category?.name ===
                                                    "DIESEL"
                                                    ? "PORTABLE " +
                                                      product?.category?.name
                                                    : product?.category?.name}
                                            </h2>
                                            <p className="font-bold text-[#333] opacity-80 mt-[3px]">
                                                {language?.catalog?.fuel_type}{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    -{" "}
                                                    {
                                                        product?.subProduct
                                                            ?.typeOfOil
                                                    }
                                                </span>
                                            </p>
                                            <p className="font-bold text-[#333] opacity-80">
                                                {language?.catalog?.model}{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    -{" "}
                                                    {product?.subProduct?.model}
                                                </span>
                                            </p>
                                            <p className="font-bold text-[#333] opacity-80">
                                                {language?.catalog?.power}{" "}
                                                <span className="inline-block font-medium text-[#333] opacity-60">
                                                    -{" "}
                                                    {product?.subProduct?.pover}{" "}
                                                    kVa
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
                                                {language?.catalog?.in_detail}
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
                        className="!max-w-[300px] !w-full h-[195px] sm:!mr-10 mt-10 sm:mt-0 object-contain"
                        src={`${baseUrl}/public/uploads/${itemProperties?.image}`}
                        alt="product-image"
                        priority={true}
                        width={306}
                        height={195}
                    />
                    {itemProperties?.category?.name === "GASOLINE" ||
                    itemProperties?.category?.name === "DIESEL" ? (
                        <div className="flex flex-col items-center justify-center text-center sm:text-start max-w-[400px] w-full">
                            <h2 className="font-bold text-[20px] leading-[30px] text-text-color mt-5 sm:mt-0">
                                PORTABLE {itemProperties?.category?.name}
                            </h2>
                            <ul className="mt-[30px]">
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.model} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.model}
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.power_pev} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.minPover} /{" "}
                                        {itemProperties?.maxPover} Hp/rpm
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.cubic_capacity} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.cubicCapacity} CC
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.max_power} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {" "}
                                        {itemProperties?.maxPover} kVa
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.frequency} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.frequency} Hz
                                    </span>
                                </li>
                            </ul>
                            <Link
                                target="_blank"
                                download="Nodirbek's resume.pdf"
                                href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
                                className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                            >
                                {language?.catalog?.download}
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center sm:text-start max-w-[400px] w-full">
                            <h2 className="font-bold text-[20px] leading-[30px] text-text-color mt-5 sm:mt-0">
                                {itemProperties?.category?.name}
                            </h2>
                            <ul className="mt-[30px]">
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.model} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.model}
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.output_power} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.minPover} /{" "}
                                        {itemProperties?.maxPover} kWm/hp
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.cylinder} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.CylinderArrangement}
                                        (л)
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.ampere} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {" "}
                                        {itemProperties?.ampere} A
                                    </span>
                                </li>
                                <li className="font-bold text-[16px] text-gray-500 leading=[20px]">
                                    {language?.catalog?.regulator_type} -{" "}
                                    <span className="inline-block font-medium text-text-color2">
                                        {itemProperties?.typeOfRegular}
                                    </span>
                                </li>
                            </ul>
                            <Link
                                target="_blank"
                                download="Nodirbek's resume.pdf"
                                href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
                                className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                            >
                                {language?.catalog?.download}
                            </Link>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default CarouselCatalog;
