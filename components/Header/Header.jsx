"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { baseUrl, motionConfig } from "@/data";

import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

import Call from "../../public/Images/call.svg";
import Planet_White from "../../public/Images/planet.svg";
import Planet_Black from "../../public/Images/planet_black.svg";
import Vector from "../../public/Images/vector.svg";
import Logo from "../../public/Images/LogoBlack.png";
import Logo_white from "../../public/Images/logoWhite.png";
import Logo_P from "@/public/Images/logoP.png";
import CallWhite from "../../public/Images/call_white.svg";
import Search from "../../public/Images/search.svg";
import Search_Black from "../../public/Images/search_black.svg";
import SideBar from "../SideBar/SideBar";

const languages = [
    { id: 0, name: "uz" },
    { id: 1, name: "ru" },
    { id: 2, name: "en" },
    { id: 3, name: "tr" },
    { id: 4, name: "tj" },
    { id: 5, name: "kz" },
    { id: 6, name: "kg" },
];

const Header = ({ language, lang }) => {
    const pathName = usePathname();

    const [showModal, setShowModal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [bg, setBg] = useState(false);
    const [closeSearchBar] = useState(true);

    const [drop, setDrop] = useState(false);
    const [drop1, setDrop1] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchWords, setSearchWords] = useState("");
    const [findedProduct, setFindedProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/product/search?search=${searchWords}`, {
                headers: { lang: lang },
            })
            .then((res) => setFindedProduct(res?.data?.data?.result?.result))
            .catch(() => console.log());
    }, [searchWords]);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.id !== "wrapper") {
                setDrop(false);
                setDrop1(false);
            }
        };
        if (typeof window !== "undefined") {
            window.addEventListener("click", handleClick);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("click", handleClick);
            }
        };
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.id !== "searchWrap") {
                setSearch(false);
            }
        };
        if (typeof window !== "undefined") {
            window.addEventListener("click", handleClick);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("click", handleClick);
            }
        };
    }, []);

    if (typeof window !== "undefined") {
        let lastScrollY = window?.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                setScrollDown(true);
                setBg(true);
            } else {
                setScrollDown(false);
                setBg(false);
            }
        });
    }

    const redirectedPathName = (locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <>
            <AnimatePresence>
                <header
                    className={`${
                        bg ? "bg-white" : "bg-transparent"
                    } drop-shadow-md fixed top-0 !w-full z-50 transition ease-in-out duration-300`}
                >
                    <Toaster />
                    <div className="container">
                        {/* --- Header top --- */}
                        <div
                            className={`${
                                scrollDown ? "hidden" : "sm:flex"
                            } hidden items-center justify-end !py-[11px] border-b-[1px]`}
                        >
                            <ul className="flex items-center space-x-5">
                                <li>
                                    <p className="font-normal text-base text-white hover:text-[#da291c] transition ease-in-out duration-200 opacity-75">
                                        24/7
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <Image
                                        src={Call}
                                        width={20}
                                        height={20}
                                        alt="Picture of call"
                                    />
                                    <Link
                                        href="tel:+998980013666"
                                        className="font-normal text-base text-white hover:text-[#da291c] transition ease-in-out duration-200 opacity-75 ml-2"
                                        aria-label="phone_number_of_Company's"
                                    >
                                        +998 98 001 3 666
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/contact`}
                                        className="font-normal text-base text-white hover:text-[#da291c] transition ease-in-out duration-200 opacity-75"
                                    >
                                        {language?.header?.contact}
                                    </Link>
                                </li>
                            </ul>
                            <span className="inline-block h-[50px] w-[1px] bg-white opacity-10 ml-[23px] mr-[10px]"></span>
                            {/* ------ Dropdown ------ */}
                            <Image
                                src={Planet_White}
                                priority={true}
                                width={20}
                                height={20}
                                alt="Picture of the author"
                            />
                            <button
                                id="wrapper"
                                onClick={() => setDrop(!drop)}
                                className={`relative flex items-center z-50 duration-200 font-medium text-base px-2 ${
                                    bg ? "text-black" : "text-white"
                                }`}
                            >
                                {lang}
                                <Image
                                    className={`duration-200 ml-2 ${
                                        drop ? "-rotate-180" : ""
                                    }`}
                                    src={Vector}
                                    priority={true}
                                    width={10}
                                    height={6}
                                    alt="Picture of the author"
                                />
                                {drop ? (
                                    <ul className="absolute z-50 -left-[24px] top-[43px] lg:top-[47px] w-[80px] bg-gray-100 rounded-lg duration-500 !text-center">
                                        {languages.map((lan) => (
                                            <Link
                                                key={lan?.id}
                                                href={redirectedPathName(
                                                    lan?.name
                                                )}
                                                className="w-full flex font-medium justify-center items-center text-sm hover:bg-[#da291c] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                            >
                                                {lan?.name}
                                            </Link>
                                        ))}
                                    </ul>
                                ) : null}
                            </button>
                        </div>
                        {/* --- Header bottom --- */}
                        <motion.div
                            {...motionConfig}
                            className={`flex items-center justify-between !py-[18px]`}
                        >
                            <Link
                                className="flex items-center"
                                href={`/${lang}`}
                            >
                                {bg ? (
                                    <Image
                                        className="hidden md:block w-[170px] h-[50px]"
                                        width={170}
                                        height={50}
                                        src={Logo}
                                        alt="site-logo"
                                        priority={true}
                                    />
                                ) : (
                                    <Image
                                        className="hidden md:block w-[170px] h-[50px]"
                                        width={170}
                                        height={50}
                                        src={Logo_white}
                                        alt="site-logo"
                                        priority={true}
                                    />
                                )}
                                <Image
                                    className="block md:hidden w-[45px] h-[40px]"
                                    width={45}
                                    height={40}
                                    src={Logo_P}
                                    alt="site-logo"
                                    priority={true}
                                />
                            </Link>
                            <nav className="hidden lg:block">
                                <ul className="flex items-center space-x-[46px]">
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={`/${lang}/catalog`}>
                                            {language?.header?.catalog}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={`/${lang}/service`}>
                                            {language?.header?.service}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={`/${lang}/about`}>
                                            {language?.header?.about}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={`/${lang}/partner`}>
                                            {language?.header?.partner}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="relative items-center hidden lg:flex">
                                <input
                                    className={`${
                                        search
                                            ? "relative max-w-[120px] w-full pl-[43px] pr-[8px] py-[8px] border-[1.5px] outline-none border-white focus:border-[#da291c] rounded-[6px] text-base !bg-transparent mr-5"
                                            : "hidden"
                                    } ${bg ? "text-[#4F6E7B]" : "text-white"}`}
                                    type="text"
                                    required
                                    minLength={1}
                                    autoComplete="off"
                                    onChange={(e) =>
                                        setSearchWords(e.target.value.trim())
                                    }
                                    aria-label={language?.header?.search}
                                    placeholder={language?.header?.search}
                                    id="searchWrap"
                                />
                                <Image
                                    className={`${
                                        search ? "absolute ml-[13px]" : "mr-5"
                                    } cursor-pointer block`}
                                    onClick={() => setSearch(true)}
                                    id="searchWrap"
                                    src={bg ? Search_Black : Search}
                                    priority={true}
                                    width={22}
                                    height={22}
                                    alt="search"
                                />
                                <button
                                    onClick={() => setShowContact(true)}
                                    className="flex items-center bg-[#da291c] rounded-[6px] px-[15px] py-[8px] "
                                >
                                    <Image
                                        src={CallWhite}
                                        width={20}
                                        height={20}
                                        alt="call-image"
                                        priority={true}
                                    />
                                    <p className="font-medium text-white text-base tracking-[0.12px] ml-[6px]">
                                        {language?.header?.consultation}
                                    </p>
                                </button>
                                {searchWords.length > 0 && closeSearchBar ? (
                                    <div className="absolute w-[340px] md:w-[500px] shadow-search_shadow rounded-search_radius max-h-[400px] md:max-h-[500px] h-fit overflow-y-scroll bg-white right-0 top-[50px] sm:top-[64px]">
                                        {findedProduct?.map((item) => (
                                            <Link
                                                key={item?._id}
                                                onClick={() => {
                                                    setSearchWords("");
                                                }}
                                                href={`/${lang}/catalog/#generators`}
                                                className="flex items-center space-x-5 hover:bg-[#da291c] border-b-[1px] px-5 py-[5px] group"
                                            >
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.category?.name}
                                                </p>{" "}
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.minPover} /{" "}
                                                    {item?.maxPover} kWm/hp
                                                </p>
                                                <p className="hidden md:block font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.subProduct?.model}
                                                </p>{" "}
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.typeOfRegular}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                            <div className="relative flex items-center ml-10 space-x-4 lg:hidden">
                                <div className="relative flex items-center">
                                    <input
                                        required
                                        minLength={1}
                                        autoComplete="off"
                                        id="searchWrap"
                                        type="text"
                                        aria-label={language?.header?.search}
                                        placeholder={language?.header?.search}
                                        onChange={(e) =>
                                            setSearchWords(
                                                e.target.value.trim()
                                            )
                                        }
                                        className={`${
                                            search
                                                ? "relative max-w-[120px] w-full pl-[35px] pr-[8px] py-[6px] border-[1.5px] outline-none border-white focus:border-[#da291c] rounded-[6px] text-base !bg-transparent"
                                                : "hidden"
                                        } ${
                                            bg ? "text-[#4F6E7B]" : "text-white"
                                        }`}
                                    />
                                    {bg ? (
                                        <Image
                                            className={`${
                                                search
                                                    ? "absolute ml-[9px]"
                                                    : ""
                                            } cursor-pointer block`}
                                            onClick={() => setSearch(true)}
                                            id="searchWrap"
                                            src={bg ? Search_Black : Search}
                                            priority={true}
                                            width={22}
                                            height={22}
                                            alt="search"
                                        />
                                    ) : (
                                        <Image
                                            className={`${
                                                search
                                                    ? "absolute ml-[9px]"
                                                    : ""
                                            } cursor-pointer block`}
                                            onClick={() => setSearch(true)}
                                            id="searchWrap"
                                            src={bg ? Search_Black : Search}
                                            priority={true}
                                            width={22}
                                            height={22}
                                            alt="search"
                                        />
                                    )}
                                </div>
                                <div className="sm:hidden relative z-50 flex items-center duration-200">
                                    {/* ------ Dropdown ------ */}
                                    <Image
                                        onClick={() => {
                                            setDrop1(!drop1);
                                        }}
                                        id="wrapper"
                                        className="w-[25px] h-[25px] "
                                        src={bg ? Planet_Black : Planet_White}
                                        width={25}
                                        height={25}
                                        alt="Picture of the author"
                                    />
                                    {drop1 ? (
                                        <ul className="absolute z-50 -left-[24px] top-[43px] lg:top-[47px] w-[80px] bg-gray-100 rounded-lg duration-500 !text-center">
                                            {languages.map((lang, index) => (
                                                <Link
                                                    key={index}
                                                    href={redirectedPathName(
                                                        lang
                                                    )}
                                                    className="flex font-medium items-center justify-center text-sm hover:bg-[#da291c] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                                >
                                                    {lang}
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                                <button
                                    className="flex flex-col justify-between !w-[30px] h-5 lg:hidden"
                                    aria-label="humberger"
                                    onClick={() => {
                                        setShowModal(true);
                                    }}
                                >
                                    <span
                                        className={`${
                                            showModal
                                                ? "-rotate-45 translate-y-[8.8px]"
                                                : ""
                                        } ${
                                            bg
                                                ? "bg-black border-black"
                                                : "bg-white border-white"
                                        } inline-block w-full border-[1.5px] opacity-50 duration-300`}
                                    ></span>
                                    <span
                                        className={`${
                                            showModal ? "hidden" : ""
                                        } ${
                                            bg
                                                ? "bg-black border-black"
                                                : "bg-white border-white"
                                        } inline-block w-[60%] border-[1.5px] opacity-50`}
                                    ></span>
                                    <span
                                        className={`${
                                            showModal
                                                ? "rotate-45 -translate-y-[8.8px]"
                                                : ""
                                        } ${
                                            bg
                                                ? "bg-black border-black"
                                                : "bg-white border-white"
                                        } inline-block w-full border-[1.5px] opacity-50 duration-300`}
                                    ></span>
                                </button>
                                {searchWords.length > 0 ? (
                                    <div className="absolute w-[340px] md:w-[500px] shadow-search_shadow rounded-search_radius max-h-[400px] md:max-h-[500px] h-fit overflow-y-scroll bg-white right-0 top-[50px] sm:top-[64px]">
                                        {findedProduct?.map((item) => (
                                            <Link
                                                key={item?._id}
                                                onClick={() => {
                                                    setSearchWords("");
                                                }}
                                                href={`/${lang}/catalog`}
                                                className="flex items-center space-x-5 hover:bg-[#da291c] border-b-[1px] px-5 py-[5px] group"
                                            >
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.category?.name}
                                                </p>{" "}
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.minPover} /{" "}
                                                    {item?.maxPover}
                                                </p>
                                                <p className="hidden md:block font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.subProduct?.model}
                                                </p>{" "}
                                                <p className="font-medium text-[14px] text-gray-800 group-hover:text-white">
                                                    {item?.typeOfRegular}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </motion.div>

                        {/* --- Sidebar --- */}
                        <Modal
                            change={true}
                            isVisible={showModal}
                            onClose={() => {
                                setShowModal(false);
                            }}
                        >
                            <SideBar
                                lang={lang}
                                language={language}
                                setShowModal={() => setShowModal(false)}
                                showModal={showModal}
                            />
                        </Modal>

                        <Modal
                            change={false}
                            isVisible={showContact}
                            onClose={() => {
                                setShowContact(false);
                            }}
                        >
                            <ContactForm
                                language={language}
                                modal
                                closeModal={() => setShowContact(false)}
                            />
                        </Modal>
                    </div>
                </header>
            </AnimatePresence>
        </>
    );
};

export default Header;
