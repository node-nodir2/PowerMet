const Numbers = ({ language }) => {
    const datas = [
        {
            id: 0,
            title: "140+",
            text: language?.hero_about?.numbers?.text_1,
        },
        {
            id: 1,
            title: "8+",
            text: language?.hero_about?.numbers?.text_2,
        },
        {
            id: 2,
            title: "10+",
            text: language?.hero_about?.numbers?.text_3,
        },
    ];

    return (
        <section className="bg-white">
            <div className="container sm:!pt-[57px] !py-[20px] sm:!pb-[95px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center">
                    {language?.hero_about?.numbers.title}
                </h2>
                <p className="font-medium text-[16px] md:text-[18px] text-black opacity-80 text-center mt-2 sm:mt-4">
                    {language?.hero_about?.numbers.sub_text}
                </p>
                <ul className="flex flex-col sm:flex-row justify-between items-center mt-10">
                    {datas?.map((data) => (
                        <li key={data?.id} className="max-w-[338px] w-full">
                            <h3 className="font-bold text-[100px] text-[#da291c] text-center leading-[105px] sm:leading-normal">
                                {data?.title}
                            </h3>
                            <p className="font-medium text-[18px] text-[#333] text-center opacity-80 mt-4 leading-normal">
                                {data?.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Numbers;
