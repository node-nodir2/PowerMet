"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Location from "@/components/Location/Location";
import ContactSection from "@/components/ContactSection/ContactSection";

const Catalog = ({ params: lang }) => {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, [dictionary]);

    return (
        <>
            <Hero
                title={language?.hero_contact?.title}
                text={language?.hero_contact?.text}
                route={language?.hero_contact?.link}
                language={language}
                link={false}
                bgImage={"contact"}
            />
            <ContactSection language={language} />
            <Location language={language} />
        </>
    );
};

export default Catalog;
