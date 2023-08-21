import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Location from "@/components/Location/Location";
import ContactSection from "@/components/ContactSection/ContactSection";

const Catalog = async ({ params: { lang } }) => {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Hero
                link={false}
                lang={lang}
                bgImage={"contact"}
                language={dictionary}
                text={dictionary?.hero_contact?.text}
                route={dictionary?.hero_contact?.link}
                title={dictionary?.hero_contact?.title}
            />
            <ContactSection language={dictionary} />
            <Location language={dictionary} />
        </>
    );
};

export default Catalog;
