"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import { baseUrl, motionConfig } from "@/data";
import Modal from "../Modal/Modal";
import { getDictionary } from "@/get-dictionary";

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
import Mark_x from "@/public/Images/x.svg";

const languages = ["uz", "ru", "en"];

const Header = ({ lang }) => {
    const pathName = usePathname();

    const [showModal, setShowModal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [language, setLanguage] = useState({});
    const [number, setNumber] = useState("");
    const [bg, setBg] = useState(false);

    const [drop, setDrop] = useState(false);
    const [drop1, setDrop1] = useState(false);
    const [search, setSearch] = useState(false);

    const notifySuccess = () => toast.success("Successfully!");
    const notifyError = () => toast.error("Error");

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
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
                setTimeout(() => {
                    setShowContact(false);
                }, 3000);
                e.target.reset();
            });
    };

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
                                    >
                                        +998 98 001 3666
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/contact"}
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
                                    width={10}
                                    height={6}
                                    alt="Picture of the author"
                                />
                                {drop ? (
                                    <ul className="absolute z-50 -left-[24px] top-[43px] lg:top-[47px] w-[80px] bg-gray-100 rounded-lg duration-500 !text-center">
                                        {languages.map((lan) => (
                                            <Link
                                                key={lan}
                                                href={redirectedPathName(lan)}
                                                className="w-full flex font-medium justify-center items-center text-sm hover:bg-[#da291c] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                            >
                                                {lan}
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
                            <Link className="flex items-center" href="/">
                                {bg ? (
                                    <Image
                                        className="hidden md:block w-[170px] h-[50px]"
                                        src={Logo}
                                        alt="site-logo"
                                    />
                                ) : (
                                    <Image
                                        className="hidden md:block w-[170px] h-[50px]"
                                        src={Logo_white}
                                        alt="site-logo"
                                    />
                                )}
                                <Image
                                    className="block md:hidden w-[45px] h-[40px]"
                                    src={Logo_P}
                                    alt="site-logo"
                                />
                            </Link>
                            <nav className="hidden lg:block">
                                <ul className="flex items-center space-x-[46px]">
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={"/catalog"}>
                                            {language?.header?.catalog}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={"/service"}>
                                            {language?.header?.service}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={"/about"}>
                                            {language?.header?.about}
                                        </Link>
                                    </li>
                                    <li
                                        className={`font-medium text-base ${
                                            bg ? "text-[#333]" : "text-white"
                                        } hover:text-[#da291c] transition ease-in-out duration-200 uppercase`}
                                    >
                                        <Link href={"/partner"}>
                                            {language?.header?.partner}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="items-center hidden lg:flex">
                                <input
                                    className={`${
                                        search
                                            ? "relative max-w-[120px] w-full pl-[43px] pr-[8px] py-[8px] border-[1.5px] outline-none border-white focus:border-[#da291c] rounded-[6px] text-base !bg-transparent mr-5"
                                            : "hidden"
                                    } ${bg ? "text-[#4F6E7B]" : "text-white"}`}
                                    type="text"
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
                                    />
                                    <p className="font-medium text-white text-base tracking-[0.12px] ml-[6px]">
                                        {language?.header?.consultation}
                                    </p>
                                </button>
                            </div>
                            <div className="flex items-center ml-10 space-x-4 lg:hidden">
                                <div className="relative flex items-center">
                                    <input
                                        id="searchWrap"
                                        type="text"
                                        placeholder={language?.header?.search}
                                        className={`${
                                            search
                                                ? "relative max-w-[120px] w-full pl-[43px] pr-[8px] py-[8px] border-[1.5px] outline-none border-white focus:border-[#da291c] rounded-[6px] text-base !bg-transparent"
                                                : "hidden"
                                        } ${
                                            bg ? "text-[#4F6E7B]" : "text-white"
                                        }`}
                                    />
                                    {bg ? (
                                        <Image
                                            className={`${
                                                search
                                                    ? "absolute ml-[13px]"
                                                    : ""
                                            } cursor-pointer block`}
                                            onClick={() => setSearch(true)}
                                            id="searchWrap"
                                            src={bg ? Search_Black : Search}
                                            width={22}
                                            height={22}
                                            alt="search"
                                        />
                                    ) : (
                                        <Image
                                            className={`${
                                                search
                                                    ? "absolute ml-[13px]"
                                                    : ""
                                            } cursor-pointer block`}
                                            onClick={() => setSearch(true)}
                                            id="searchWrap"
                                            src={bg ? Search_Black : Search}
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
                                            {languages.map((lan) => (
                                                <Link
                                                    key={lan}
                                                    href={redirectedPathName(
                                                        lan
                                                    )}
                                                    className="flex font-medium items-center justify-center text-sm hover:bg-[#da291c] text-[#454545] hover:text-white duration-300 py-1 px-3 rounded-lg"
                                                >
                                                    {lan}
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                                <button
                                    className="flex flex-col justify-between !w-[30px] h-5 lg:hidden"
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
                            <div className="flex items-center justify-between py-[18px]">
                                <div
                                    onClick={() => setShowModal(false)}
                                    className="flex items-center justify-between"
                                >
                                    <Link
                                        className="flex items-center"
                                        href="/"
                                    >
                                        <Image
                                            className="w-[130px] h-[40px]"
                                            src={Logo}
                                            alt="site-logo"
                                        />
                                    </Link>
                                </div>
                                <button
                                    className="flex flex-col justify-between w-[26px] h-5"
                                    onClick={() => {
                                        setShowModal(!showModal);
                                    }}
                                >
                                    <span
                                        className={`${
                                            showModal
                                                ? "-rotate-45 translate-y-[8.8px]"
                                                : ""
                                        } inline-block w-full border border-black opacity-50 duration-300`}
                                    ></span>
                                    <span
                                        className={`${
                                            showModal ? "hidden" : ""
                                        } inline-block w-[60%] border border-black opacity-50`}
                                    ></span>
                                    <span
                                        className={`${
                                            showModal
                                                ? "rotate-45 -translate-y-[8.8px]"
                                                : ""
                                        } inline-block w-full border border-black opacity-50 duration-300`}
                                    ></span>
                                </button>
                            </div>
                            <nav className="mt-[30px]">
                                <ul className="flex flex-col items-center space-y-5 text-center">
                                    <li
                                        onClick={() => setShowModal(false)}
                                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                                    >
                                        <Link href={"/catalog"}>
                                            {language?.header?.catalog}
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => setShowModal(false)}
                                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                                    >
                                        <Link href={"/service"}>
                                            {language?.header?.service}
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => setShowModal(false)}
                                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                                    >
                                        <Link href={"/about"}>
                                            {language?.header?.about}
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => setShowModal(false)}
                                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                                    >
                                        <Link href={"/partner"}>
                                            {language?.header?.partner}
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => setShowModal(false)}
                                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                                    >
                                        <Link href={"/contact"}>
                                            {language?.header?.contact}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="flex flex-col items-center mt-5 space-y-5 text-center">
                                <li className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase">
                                    24/7
                                </li>
                                <li className="font-medium text-base text-[#333]  uppercase">
                                    <Link
                                        href={`tel:+998980013666`}
                                        className="flex items-center"
                                    >
                                        <Image
                                            src={Call}
                                            width={20}
                                            height={20}
                                            alt="call-image"
                                        />
                                        <p className="font-medium text-base text-[#333] ml-2 hover:text-[#da291c] transition ease-in-out duration-200">
                                            +998 98 001 3666
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </Modal>

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
                                        onChange={(e) =>
                                            setNumber(e.target.value.trim())
                                        }
                                        placeholder={
                                            language?.header?.modal?.placeholder
                                        }
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
                                        +998 98 001 3666
                                    </Link>
                                </div>
                                <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                                    {language?.header?.modal?.text}
                                </p>
                            </div>
                        </Modal>
                    </div>
                </header>
            </AnimatePresence>
        </>
    );
};

export default Header;