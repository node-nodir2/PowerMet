import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Services from "@/components/Services/Services";

const Service = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero
        title={dictionary?.hero_service?.title}
        text={dictionary?.hero_service?.text}
        route={dictionary?.hero_service?.link}
        link
        bgImage={"service"}
        language={dictionary}
      />
      <Services />
    </>
  );
};

export default Service;
