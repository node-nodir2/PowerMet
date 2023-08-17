"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Services from "@/components/Services/Services";

const Service = ({ params: lang }) => {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, []);
    return (
        <>
            <Hero
                title={language?.hero_service?.title}
                text={language?.hero_service?.text}
                route={language?.hero_service?.link}
                link={true}
                bgImage={"service"}
                language={language}
            />
            <Services />
        </>
    );
};

export default Service;
