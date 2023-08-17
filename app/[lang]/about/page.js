"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import Documentation from "@/components/Documentation/Documentation";
import Hero from "@/components/HeroForPage/Hero";
import Font from "@/components/Numbers/Numbers";

const About = ({ params: lang }) => {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, []);
    return (
        <>
            <Hero
                title={language?.hero_about?.title}
                text={language?.hero_about?.text}
                route={language?.hero_about?.link}
                link={true}
                bgImage={"about"}
                language={language}
            />
            <Font language={language} />
            <Documentation language={language} />
        </>
    );
};

export default About;
