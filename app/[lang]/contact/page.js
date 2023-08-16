import Hero from "@/components/HeroForPage/Hero";
import Location from "@/components/Location/Location";
import ContactSection from "@/components/ContactSection/ContactSection";

const Catalog = () => {
    return (
        <>
            <Hero
                title={"Все способы связи с нами 24/7"}
                text={"Мы предоставляем круглосуточную поддержку наших клиентов"}
                route={"Контакты "}
                link={false}
                bgImage={"contact"}
            />
            <ContactSection />
            <Location />
        </>
    );
};

export default Catalog;
