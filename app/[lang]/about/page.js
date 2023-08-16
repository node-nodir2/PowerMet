import Documentation from "@/components/Documentation/Documentation";
import Hero from "@/components/HeroForPage/Hero";
import Font from "@/components/Numbers/Numbers";

const About = () => {
    return (
        <>
            <Hero
                title={"О нас"}
                text={
                    "Наша кампания предоставляет такие услуги как продажа и монтаж генераторов в любос ассортименте"
                }
                route={"О нас"}
                link={true}
                bgImage={"about"}
            />
            <Font />
            <Documentation />
        </>
    );
};

export default About;
