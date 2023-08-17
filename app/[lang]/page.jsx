"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import CarouselCatalog from "@/components/CarouselCatolog/CarouselCatalog";
import Contact from "@/components/FormContact/FormContact";
import Design from "@/components/Design/Design";
import Factory from "@/components/Factory/Factory";
import Hero from "@/components/Hero/Hero";
import Client from "@/components/Clients/Clients";

export default function Home({ params: { lang } }) {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, [dictionary]);

    return (
        <>
            <Hero language={language} />
            <Factory language={language} />
            <CarouselCatalog language={language} />
            <Design language={language} />
            <Client language={language} title={language?.partner?.title} />
            <Contact language={language} />
        </>
    );
}
