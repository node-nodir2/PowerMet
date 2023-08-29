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
