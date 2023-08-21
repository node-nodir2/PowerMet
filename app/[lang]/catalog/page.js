import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Product from "@/components/Products/Products";

const Catalog = async ({ params: { lang } }) => {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Hero
                link
                lang={lang}
                bgImage={"catalog"}
                language={dictionary}
                title={dictionary?.hero_catalog?.title}
                text={dictionary?.hero_catalog?.text}
                route={dictionary?.hero_catalog?.link}
            />
            <Product language={dictionary} />
        </>
    );
};

export default Catalog;
