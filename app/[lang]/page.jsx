import { getDictionary } from "@/get-dictionary";

import CarouselCatalog from "@/components/CarouselCatolog/CarouselCatalog";
import Contact from "@/components/FormContact/FormContact";
import Design from "@/components/Design/Design";
import Factory from "@/components/Factory/Factory";
import Hero from "@/components/Hero/Hero";
import Client from "@/components/Clients/Clients";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero language={dictionary} />
      <Factory language={dictionary} />
      <CarouselCatalog language={dictionary} />
      <Design language={dictionary} />
      <Client language={dictionary} title={dictionary?.partner?.title} />
      <Contact language={dictionary} />
    </>
  );
}
