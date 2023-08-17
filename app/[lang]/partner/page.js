import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Partner from "@/components/Partner/Partner";

const Partnership = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero
        title={dictionary?.hero_partner?.title}
        text={dictionary?.hero_partner?.text}
        route={dictionary?.hero_partner?.link}
        language={dictionary}
        link={false}
        bgImage={"partner"}
      />
      <Partner language={dictionary} />
    </>
  );
};

export default Partnership;
