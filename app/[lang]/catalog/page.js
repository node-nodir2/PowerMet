"use client";
import { useState, useEffect } from "react";
import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Product from "@/components/Products/Products";

const Catalog = ({ params: lang }) => {
    const [language, setLanguage] = useState({});

    const dictionary = getDictionary(lang);
    useEffect(() => {
        dictionary.then((res) => setLanguage(res));
    }, []);
    return (
        <>
            <Hero
                title={language?.hero_catalog?.title}
                text={language?.hero_catalog?.text}
                route={language?.hero_catalog?.link}
                link={true}
                bgImage={"catalog"}
                language={language}
            />
            <Product language={language} />
        </>
    );
};

export default Catalog;
