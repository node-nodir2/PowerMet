import { getDictionary } from "@/get-dictionary";

import Documentation from "@/components/Documentation/Documentation";
import Hero from "@/components/HeroForPage/Hero";
import Font from "@/components/Numbers/Numbers";

const About = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero
        title={dictionary?.hero_about?.title}
        text={dictionary?.hero_about?.text}
        route={dictionary?.hero_about?.link}
        link
        bgImage={"about"}
        language={dictionary}
      />
      <Font language={dictionary} />
      <Documentation language={dictionary} />
    </>
  );
};

export default About;
