"use client";
import Link from "next/link";
import Image from "next/image";
import { i18n } from "../../i18n-config";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getDictionary } from "@/get-dictionary";

import Head from "./head";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

import Call from "@/public/Images/call-fixed.svg";
import Telegram from "@/public/Images/telegram.png";

import "./globals.css";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }) {
    const [showContact, setShowContact] = useState(false);
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
                <Link
                    href="https://telegram.me/GeneratorUZB_Bot"
                    target="_blank"
                    className="flex items-center justify-center fixed bottom-[92px] sm:bottom-[108px] right-[20px] sm:right-[100px] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] p-2 !z-50 animate-bounce"
                >
                    <Image src={Telegram} width={55} height={55} alt="call" />
                </Link>
                <Link
                    onClick={() => {
                        setShowContact(true);
                    }}
                    href="tel:+998980013666"
                    className="flex items-center justify-center fixed bottom-10 right-[20px] sm:right-[100px] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] !z-50 animate-bounce"
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
                    <ContactForm
                        language={language}
                        modal
                        closeModal={() => setShowContact(false)}
                    />
                </Modal>
            </body>
        </html>
    );
}
