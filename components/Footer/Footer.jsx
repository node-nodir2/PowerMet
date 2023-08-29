"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { baseUrl } from "@/data";

import Logo from "../../public/Images/logoWhite.png";
import Arrow from "../../public/Images/arrow-up.svg";

const Footer = ({ language, lang }) => {
    const [number, setNumber] = useState("");

    const notifySuccess = () => toast.success(language?.toast?.success);
    const notifyError = () => toast.error(language?.toast?.error);

    const PostNumber = (e) => {
        e.preventDefault();
        axios
            .post(`${baseUrl}/contact`, {
                phoneNumber: number,
            })
            .then((res) => {
                if (res.status === 200) {
                    notifySuccess();
                }
            })
            .catch(() => {
                notifyError();
            })
            .finally(() => {
                e.target.reset();
            });
    };

    return (
        <div className="bg-[#1A1A1A] !pt-[50px] !pb-[35px]">
            <Toaster />
            <div className="container flex !items-end !pb-[35px] border-b-[0.7px] border-[#474747]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start space-y-5 sm:space-y-0">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center" href={`/${lang}`}>
                            <Image
                                className="w-[170px] sm:w-[220px] h-[50px] sm:h-[60px]"
                                src={Logo}
                                priority={true}
                                alt="site-logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <p className="block font-bold text-[20px] text-white">
                            {language?.footer?.home}
                        </p>
                        <ul className="space-y-[6px] mt-[15px]">
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/catalog`}>
                                    {language?.footer?.catalog}
                                </Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/service`}>
                                    {language?.footer?.service}
                                </Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/about`}>
                                    {language?.footer?.about}
                                </Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/contact`}>
                                    {language?.footer?.submit}
                                </Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/partner`}>
                                    {language?.footer?.partner}
                                </Link>
                            </li>
                            <li className="font-normal text-base text-white">
                                <Link href={`/${lang}/contact`}>
                                    {language?.footer?.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="block font-bold text-[20px] text-white">
                            {language?.footer?.contact}
                        </p>
                        <div className="space-y-[6px] mt-[15px]">
                            <p className="font-bold text-base text-white">
                                {language?.footer?.address}
                            </p>
                            <address className="not-italic inline-block font-normal text-base text-white">
                                {language?.footer?.address_text} <br />{" "}
                                34.Tashkent, Mirabad Uzbekistan
                            </address>
                            <p className="font-bold text-base text-white">
                                {language?.footer?.mail}
                            </p>
                            <Link
                                className="not-italic inline-block font-normal text-base text-white"
                                href="mailto:powermet.infor@gmail.com"
                            >
                                powermet.infor@gmail.com
                            </Link>
                            <Link
                                href="tel+998900013666"
                                className="inline-block font-normal text-base text-white"
                            >
                                +998 98 001 3 666
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="block font-bold text-[20px] text-white leading-6">
                            {language?.footer?.consultation_title}
                        </p>
                        <form
                            autoComplete="off"
                            onSubmit={PostNumber}
                            className="flex flex-col space-y-5 mt-[15px]"
                        >
                            <input
                                required
                                type="text"
                                onChange={(e) =>
                                    setNumber(e.target.value.trim())
                                }
                                placeholder={language?.footer?.placeholder}
                                className="w-full h-[50px] rounded-[8px] outline-none border border-white bg-input-bg-footer text-white placeholder-white px-3"
                            />
                            <button
                                className="w-full h-[50px] rounded-[8px] bg-input-bg-contact font-bold border border-white text-white"
                                type="submit"
                            >
                                {language?.footer?.send}
                            </button>
                        </form>
                    </div>
                </div>
                <Link
                    className="flex items-center justify-center w-[60px] h-[50px] bg-[#313131] rounded-lg ml-[35px] sm:mb-[35px]"
                    href={`#`}
                >
                    <Image
                        priority={true}
                        src={Arrow}
                        width={21}
                        height={12}
                        alt="arrow-up"
                    />
                </Link>
            </div>
            <p className="container sm:!p-0 font-normal text-[12px] text-[#D9DBE1] !mt-[18px]">
                СП OOO «POWER MET INTERNATIONAL»
            </p>
        </div>
    );
};

export default Footer;
