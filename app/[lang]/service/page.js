import Hero from "@/components/HeroForPage/Hero";
import Services from "@/components/Services/Services";

const Service = () => {
    return (
        <>
            <Hero
                title={"Услуги нашей кампании"}
                text={
                    "На данной странице у вас есть возможность ознакомиться со всеми услугами компании Power Met International"
                }
                route={"Услуги"}
                link={true}
                bgImage={"service"}
            />
            <Services />
        </>
    );
};

export default Service;
