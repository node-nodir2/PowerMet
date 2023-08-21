import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Partner from "@/components/Partner/Partner";

const Partnership = async ({ params: { lang } }) => {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Hero
                link={false}
                lang={lang}
                bgImage={"partner"}
                language={dictionary}
                text={dictionary?.hero_partner?.text}
                route={dictionary?.hero_partner?.link}
                title={dictionary?.hero_partner?.title}
            />
            <Partner language={dictionary} />
        </>
    );
};

export default Partnership;
