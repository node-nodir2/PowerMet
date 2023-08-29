const Numbers = ({ language }) => {
    const datas = [
        {
            id: 0,
            title: "5000",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        },
        {
            id: 1,
            title: "14",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        },
        {
            id: 2,
            title: "99",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        },
    ];

    return (
        <section className="bg-white">
            <div className="container sm:!pt-[57px] !py-[20px] sm:!pb-[95px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center">
                    {language?.hero_about?.numbers}
                </h2>
                <ul className="flex flex-col sm:flex-row items-center justify-between mt-5">
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
