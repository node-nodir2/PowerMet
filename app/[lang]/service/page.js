import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Services from "@/components/Services/Services";

const Service = async ({ params: { lang } }) => {
    const dictionary = await getDictionary(lang);
    return (
        <>
            <Hero
                link
                lang={lang}
                bgImage={"service"}
                language={dictionary}
                text={dictionary?.hero_service?.text}
                route={dictionary?.hero_service?.link}
                title={dictionary?.hero_service?.title}
            />
            <Services />
        </>
    );
};

export default Service;
