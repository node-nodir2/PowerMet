"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Head from "./head";
import toast, { Toaster } from "react-hot-toast";

import { baseUrl } from "@/data";
import { i18n } from "../../i18n-config";
import { getDictionary } from "@/get-dictionary";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import Call from "@/public/Images/call-fixed.svg";
import Mark_x from "@/public/Images/x.svg";
// import Loader from "@/public/Images/loader_io.svg";

import "./globals.css";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }) {
    const [showContact, setShowContact] = useState(false);
    const [language, setLanguage] = useState({});
    const [number, setNumber] = useState("");

    useEffect(() => {
        getDictionary(lang).then(setLanguage);
    }, [lang]);

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

    return (
        <html lang={lang}>
            <Head />
            <body>
                <Toaster />
                <Header language={language} lang={lang} />
                {children}
                <Footer language={language} />
                <Link
                    onClick={() => {
                        setShowContact(true);
                    }}
                    href="tel:+998900013666"
                    className="hidden sm:block fixed bottom-14 !right-[100px] w-[80px] h-[80px] !z-50 animate-bounce"
                >
                    <Image src={Call} width={80} height={80} alt="call" />
                </Link>

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
                                required
                                placeholder={
                                    language?.header?.modal?.placeholder
                                }
                                onChange={(e) =>
                                    setNumber(e.target.value.trim())
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
                                +998 98 001 3666
                            </Link>
                        </div>
                        <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                            {language?.header?.modal?.text}
                        </p>
                    </div>
                </Modal>
            </body>
        </html>
    );
}
