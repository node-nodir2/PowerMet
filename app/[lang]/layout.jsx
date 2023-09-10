"use client";
import Link from "next/link";
import Image from "next/image";
import { i18n } from "../../i18n-config";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getDictionary } from "@/get-dictionary";

import Head from "./head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import Call from "@/public/Images/call-fixed.svg";
import Telegram from "@/public/Images/telegram.png";

import "./globals.css";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }) {
    const [language, setLanguage] = useState({});

    useEffect(() => {
        getDictionary(lang).then(setLanguage);
    }, [lang]);

    return (
        <html lang={lang}>
            <Head />
            <body>
                <Toaster />
                <Header language={language} lang={lang} />
                {children}
                <Footer language={language} lang={lang} />
                <div className="fixed bottom-10 right-[20px] sm:right-[100px] z-50 flex items-center justify-center flex-col space-y-5 sm:space-y-7 animate-bounce">
                    <Link
                        href="https://telegram.me/powermet_bot"
                        target="_blank"
                        className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]"
                    >
                        <Image src={Telegram} width={80} height={80} alt="call" />
                    </Link>
                    <Link
                        href="tel:+998980013666"
                        target="_blank"
                        className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] p-2 border-2 border-[#da291c] rounded-full bg-white bg-opacity-80"
                    >
                        <Image src={Call} width={100} height={100} alt="call" />
                    </Link>
                </div>
            </body>
        </html>
    );
}
