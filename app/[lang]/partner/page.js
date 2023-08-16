import Hero from "@/components/HeroForPage/Hero";
import Partner from "@/components/Partner/Partner";

const Partnership = () => {
    return (
        <>
            <Hero
                title={"С нами работают более 7 поставщиков"}
                text={"Здесь вы можете ознакомиться с каждым из поставщиков"}
                route={"Партнеры"}
                link={false}
                bgImage={"partner"}
            />
            <Partner />
        </>
    );
};

export default Partnership;
