"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Partner from "@/components/Partner/Partner";

const Partnership = ({ params: lang }) => {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, []);
    return (
        <>
            <Hero
                title={language?.hero_partner?.title}
                text={language?.hero_partner?.text}
                route={language?.hero_partner?.link}
                language={language}
                link={false}
                bgImage={"partner"}
            />
            <Partner language={language} />
        </>
    );
};

export default Partnership;
