import { getDictionary } from "@/get-dictionary";

import Hero from "@/components/HeroForPage/Hero";
import Location from "@/components/Location/Location";
import ContactSection from "@/components/ContactSection/ContactSection";

const Catalog = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero
        title={dictionary?.hero_contact?.title}
        text={dictionary?.hero_contact?.text}
        route={dictionary?.hero_contact?.link}
        language={dictionary}
        link={false}
        bgImage={"contact"}
      />
      <ContactSection language={dictionary} />
      <Location language={dictionary} />
    </>
  );
};

export default Catalog;
