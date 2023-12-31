"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl, motionConfig } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

import Modal from "../Modal/Modal";

import Up from "@/public/Images/chevron-right.svg";
import Mark_x from "@/public/Images/x_black.svg";
import Loader from "@/public/Images/spinner.svg";

import "./product.css";

const Product = ({ language }) => {
    const [drop, setDrop] = useState(false);
    const [drop1, setDrop1] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [productPowerMax, setproductPowerMax] = useState(null);
    const [productPowerMin, setproductPowerMin] = useState(null);
    const [itemProperties, setItemProperties] = useState({});
    const [showModal, setShowModal] = useState(false);
    const powers = [
        { id: 0, kb: "0 - 99", minPower: "0", maxPower: "99" },
        { id: 1, kb: "100 - 199", minPower: "100", maxPower: "199" },
        { id: 2, kb: "200 - 399", minPower: "200", maxPower: "399" },
        { id: 3, kb: "400 - 699", minPower: "400", maxPower: "699" },
        { id: 5, kb: "700 - 999", minPower: "700", maxPower: "999" },
        { id: 6, kb: "1000 - 1999", minPower: "1000", maxPower: "1999" },
        { id: 7, kb: "2000 - 4000", minPower: "2000", maxPower: "4000" },
    ];

    const getProducts = () => {
        const url = new URL(`${baseUrl}/product/all`);
        const headers = { lang: "en" };

        if (activeCategory)
            url.searchParams.append("categoryId", activeCategory);
        if (productPowerMin)
            url.searchParams.append("minPover", productPowerMin);
        if (productPowerMax)
            url.searchParams.append("maxPover", productPowerMax);

        axios
            .get(url.toString(), {
                headers,
            })
            .then((res) => {
                setProducts([
                    ...res?.data?.data?.result.result,
                    ...res?.data?.data?.result2.result,
                ]);
            })
            .catch(console.log);
    };

    const getAllCategories = () => {
        axios
            .get(`${baseUrl}/category/all`, {
                headers: { lang: "en" },
            })
            .then((res) => setCategories(res?.data?.data?.result))
            .catch(console.log);
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [activeCategory, productPowerMax, productPowerMin]); // eslint-disable-line

    return (
        <section id="generators">
            <div className="container">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center mt-5">
                    {language?.catalog?.title}
                </h2>
                <p className="font-medium text-[16px] md:text-[18px] text-black opacity-80 text-center mt-2 sm:mt-4">
                    {" "}
                    {language?.catalog?.text}
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between space-y-[40px] lg:space-y-0 lg:space-x-[40px] !py-[20px] lg:!py-[50px]">
                    <div className="max-w-[300px] w-full mx-auto lg:mx-0">
                        <button
                            type="button"
                            onClick={() => setDrop(!drop)}
                            className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px] uppercase"
                        >
                            {language?.hero_catalog?.type}
                            <Image
                                className={`${
                                    drop ? "rotate-180" : "rotate-0"
                                } duration-300`}
                                priority={true}
                                src={Up}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        {drop ? (
                            <form
                                className="px-[15px]"
                                autoComplete="off"
                                method="GET"
                            >
                                {categories.length > 0 &&
                                    categories?.map((data) => (
                                        <div
                                            key={data?._id}
                                            className="flex items-center space-x-[10px] py-[5px] bg-white"
                                        >
                                            <input
                                                className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                                                type="checkbox"
                                                aria-label="select categor"
                                                checked={
                                                    activeCategory === data?._id
                                                }
                                                name={data?.name}
                                                y
                                                id={data?.name}
                                                onChange={() =>
                                                    setActiveCategory(
                                                        activeCategory ===
                                                            data?._id
                                                            ? null
                                                            : data?._id
                                                    )
                                                }
                                            />
                                            <label
                                                htmlFor={data?.name}
                                                className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                                            >
                                                {data?.name === "GASOLINE" ||
                                                data?.name === "DIESEL"
                                                    ? "PORTABLE " + data?.name
                                                    : data?.name}
                                            </label>
                                        </div>
                                    ))}
                            </form>
                        ) : null}
                        <button
                            type="button"
                            onClick={() => setDrop1(!drop1)}
                            className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px]"
                        >
                            кВа{" "}
                            <Image
                                className={`${
                                    drop1 ? "rotate-180" : "rotate-0"
                                } duration-300`}
                                src={Up}
                                priority={true}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                        {drop1 ? (
                            <form
                                className="px-[15px]"
                                autoComplete="off"
                                method="GET"
                            >
                                {powers?.map((data) => (
                                    <div
                                        key={data?.id}
                                        className="flex items-center space-x-[10px] py-[5px] bg-white"
                                    >
                                        <input
                                            className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                                            aria-label="select power of product"
                                            type="checkbox"
                                            name={data?.kb}
                                            id={data?.kb}
                                            checked={
                                                productPowerMax ===
                                                data?.maxPower
                                            }
                                            onChange={() => {
                                                setproductPowerMax(
                                                    productPowerMax ===
                                                        data?.maxPower
                                                        ? null
                                                        : data?.maxPower
                                                );
                                                setproductPowerMin(
                                                    productPowerMin ===
                                                        data?.minPower
                                                        ? null
                                                        : data?.minPower
                                                );
                                            }}
                                        />
                                        <label
                                            htmlFor={data?.kb}
                                            className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                                        >
                                            {data?.kb} кВа
                                        </label>
                                    </div>
                                ))}
                            </form>
                        ) : null}
                    </div>
                    <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-3">
                        <AnimatePresence>
                            {products.length ? (
                                products?.map((product) => (
                                    <motion.div
                                        {...motionConfig}
                                        key={product?._id}
                                        className="max-w-[270px] bg-white rounded-md shadow-card_shadow cursor-pointer pt-4"
                                    >
                                        <Image
                                            className="w-[236px] h-[165px] rounded-md object-contain"
                                            src={`${baseUrl}/public/uploads/${product?.image}`}
                                            width={236}
                                            height={165}
                                            priority={true}
                                            alt="generator"
                                        />
                                        <div className="px-[18px] pb-5">
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
                                                aria-label={
                                                    language?.catalog?.in_detail
                                                }
                                                className="w-full mx-auto font-medium text-[18px] text-white text-center py-2 bg-[#da291c] rounded-lg mt-[14px]"
                                            >
                                                {language?.catalog?.in_detail}
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div {...motionConfig} key={0}>
                                    <Image
                                        className="w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
                                        src={Loader}
                                        alt="loader"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
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
                            priority={true}
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
                    />
                    {itemProperties?.category?.name === "GASOLINE" ||
                    itemProperties?.category?.name === "DIESEL" ? (
                        <div className="flex flex-col items-center justify-center text-start max-w-[400px] w-full px-10 sm:px-0">
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
                                download="Products pdf"
                                aria-label={language?.catalog?.download}
                                href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
                                className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                            >
                                {language?.catalog?.download}
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-start max-w-[400px] w-full px-10 sm:px-0">
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
                                download="Products pdf"
                                aria-label={language?.catalog?.download}
                                href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
                                className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
                            >
                                {language?.catalog?.download}
                            </Link>
                        </div>
                    )}
                </div>
            </Modal>
        </section>
    );
};

export default Product;
